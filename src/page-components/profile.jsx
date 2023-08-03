import { useCallback, useContext, useEffect, useState } from "react";
import Joi from "../services/validatorService";
import { deleteData, getData, setData } from "../services/httpService";
import {
  loginWithJwt,
  signIn,
  updateEmail,
  updatePassword,
  updateUser,
} from "../services/authService";
import logger from "../services/logService";
import ValidatorContext from "../context/validatorContext";
import AuthContext from "../context/authContext";
import ProfileContext from "./../context/profileContext";
import RequireAuth from "../common/auth";
import Loader from "../common/block-components/loader";
import UserProfile from "./../common/block-components/block-userProfile";
import { clearNotify, mapErrorTo, capitalize } from "../utilities/helpers";

const documentName = "users";

const Profile = () => {
  // === Context APIs
  const validator = useContext(ValidatorContext);
  const userEmail = useContext(AuthContext)?.email;

  // === Page State
  const [login, setLogin] = useState({
    data: { username: "", email: "", password: "" },
    errors: {},
    success: "",
  });
  const [userData, setUserData] = useState({});
  const [loader, setLoader] = useState(true);

  // === Schema Validator
  const schema = {
    username: Joi.string().min(3).max(30).required().label("Username"),
    email: Joi.string().email().min(5).max(50).required().label("E-mail"),
    password: Joi.string().min(8).max(40).required().label("Password"),
  };

  // === Encapsulating form data
  const formObj = () => {
    const form = new validator(login, setLogin, schema);
    const { success } = login;
    const errors = Object.entries(login.errors)
      .filter((el) => !el[1].includes("is not allowed to be empty"))
      .reduce((a, b) => ({ ...a, [b[0]]: b[1] }), {});

    const data = (prop) => login.data[prop] === "";

    return { form, success, errors, data };
  };

  // === Handlers
  // username
  const handleUsernameUpdate = async (e) => {
    e.preventDefault();
    setLoader(true);

    const obj = { ...login };
    const { username } = obj.data;

    if (!username || obj.errors.username) return;

    try {
      const { password } = userData;
      if (!password) throw new Error();

      const { user } = await signIn(userEmail, password);
      await updateUser(user, { displayName: username });
      await setData(documentName, userEmail, { username });
      loginWithJwt(user.accessToken);

      obj.success = `Updated your "Username" sucessfully`;
      obj.data.username = "";
    } catch (error) {
      obj.errors.generic = mapErrorTo(error.code);
      logger.log(error);
    }

    setLoader(false);
    setLogin({ ...obj });
    clearNotify(obj, setLogin);
  };

  //  email
  const handleEmailUpdate = async (e) => {
    e.preventDefault();
    setLoader(true);

    const obj = { ...login };
    const userObj = { ...userData };
    const { email } = obj.data;

    if (!email || obj.errors.email) return;

    try {
      const { password } = userData;
      if (!password) throw new Error();

      const { user } = await signIn(userEmail, password);
      await updateEmail(user, email);
      await deleteData(documentName, userEmail);
      await setData(documentName, email, { ...userObj, email });
      loginWithJwt(user.accessToken);

      obj.success = `Updated your "E-mail Address" successfully`;
      obj.data.email = "";
    } catch (error) {
      obj.errors.generic = mapErrorTo(error.code);
      logger.log(error);
    }

    setLoader(false);
    setLogin({ ...obj });
    clearNotify(obj, setLogin);
  };

  // password
  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setLoader(true);

    const obj = { ...login };
    const { password: newPassword } = obj.data;

    if (!newPassword || obj.errors.password) return;

    try {
      const { password } = userData;
      if (!password) throw new Error();

      const { user } = await signIn(userEmail, password);
      await updatePassword(user, newPassword);
      await setData(documentName, userEmail, { password: newPassword });
      loginWithJwt(user.accessToken);

      obj.success = `Updated your "Password" successfully`;
      obj.data.password = "";
    } catch (error) {
      obj.errors.generic = mapErrorTo(error.code);
      logger.log(error);
    }

    setLoader(false);
    setLogin({ ...obj });
    clearNotify(obj, setLogin);
  };

  // personal data
  const handlePersonalData = async (e) => {
    e.preventDefault();
    setLoader(true);

    const obj = { ...login };
    const prop = [
      "fullName",
      "dob",
      "country",
      "street",
      "city",
      "state",
      "zipCode",
    ];
    const personalInfo = prop.reduce(
      (a, b, i) => ({
        ...a,
        [b]: capitalize(e.target[i].value) || userData.personalInfo?.[b],
      }),
      {}
    );

    if (Object.values(personalInfo).every((el) => !el)) return setLoader(false);

    try {
      await setData(documentName, userEmail, { personalInfo });

      prop.forEach((_el, i) => (e.target[i].value = ""));
      setUserData({ ...userData, personalInfo });
    } catch (error) {
      obj.errors.generic = mapErrorTo(error.code);
      logger.log(error);

      setLogin({ ...obj });
      clearNotify(obj, setLogin);
    }
    setLoader(false);
  };

  // === Consuming API data
  const getUserData = useCallback(async () => {
    const obj = await getData(documentName, userEmail);
    return obj;
  }, [userEmail]);

  useEffect(() => {
    const obj = { ...login };
    try {
      const data = async () => {
        const userObj = await getUserData();
        if (userObj.exists()) setUserData({ ...userObj.data() });
      };
      data();
    } catch (error) {
      obj.errors.generic = mapErrorTo(error.code);
      setLogin({ ...obj });
      logger.log(error);

      clearNotify(obj, setLogin);
    }
    setLoader(false);
  }, [getUserData]);

  return (
    <RequireAuth>
      <ProfileContext.Provider
        value={{
          state: { userData },
          keyProps: formObj(),
          handlers: {
            handleUsernameUpdate,
            handleEmailUpdate,
            handlePasswordUpdate,
            handlePersonalData,
          },
        }}
      >
        {loader && <Loader />}
        <UserProfile />
      </ProfileContext.Provider>
    </RequireAuth>
  );
};

export default Profile;
