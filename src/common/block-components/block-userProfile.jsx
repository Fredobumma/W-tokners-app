import { useContext } from "react";
import ProfileContext from "../../context/profileContext";
import { AuthForm, PersonalForm } from "../profileForm";
import { DateInput } from "../input";
import SelectOptions from "../selectOptions";
import Heading from "./../abstract-components/profileHeading";

const UserProfile = () => {
  // === Destructuring Context
  const {
    state: { userData },
    keyProps: { form, success, errors, data },
    handlers: {
      handleUsernameUpdate,
      handlePasswordUpdate,
      handleEmailUpdate,
      handlePersonalData,
    },
  } = useContext(ProfileContext);

  const { fullName, dob, country, street, city, state, zipCode } =
    userData.personalInfo || {};

  // === Date Input Algorithm and Logic
  const date = new Date();
  const year = date.getFullYear();

  // === Available Countries Encapsulated Data
  const countryValues = [
    "",
    "United States",
    "United Kingdom",
    "Canada",
    "China",
    "Australia",
    "Argentina",
  ];

  // === Authentication Data Details
  const authFields = [
    {
      id: "username",
      placeholder: "Username",
      type: "text",
      maxLength: "20",
      handler: handleUsernameUpdate,
    },
    {
      id: "email",
      placeholder: "E-mail address",
      maxLength: "40",
      handler: handleEmailUpdate,
    },
    {
      id: "password",
      placeholder: "Password",
      autoComplete: "new-password",
      maxLength: "30",
      handler: handlePasswordUpdate,
    },
  ];

  // === Personal Information Data Details
  const personalFields = [
    {
      label: "Full Name",
      autoComplete: "name",
      id: "fullname",
      name: "fullname",
      type: "text",
      placeholder: fullName || "Firstname Lastname",
      minLength: "4",
      maxLength: "30",
    },
    {
      Component: (props) => <DateInput {...props} />,
      label: "Date of Birth",
      autoComplete: "bday",
      id: "date",
      name: "date",
      type: "text",
      placeholder: dob || "mm/dd/yyyy",
      min: "1900-01-01",
      max: `${year - 7}-01-01`,
    },
    {
      Component: (props) => <SelectOptions {...props} />,
      label: "Country",
      id: "country",
      autoComplete: "country-name",
      country,
      ...countryValues,
    },
    {
      label: "Street Address",
      autoComplete: "street-address",
      id: "street",
      name: "street",
      type: "text",
      placeholder: street || "Enter your street address",
      minLength: "5",
      maxLength: "100",
    },
    {
      label: "City",
      autoComplete: "on",
      id: "city",
      name: "city",
      type: "text",
      placeholder: city || "Enter your city",
      minLength: "3",
      maxLength: "30",
    },
    {
      label: "State / Province",
      autoComplete: "on",
      id: "state",
      name: "state",
      type: "text",
      placeholder: state || "Enter your state / province",
      minLength: "3",
      maxLength: "30",
    },
    {
      label: "ZIP / Postal Code",
      autoComplete: "postal-code",
      id: "zipcode",
      name: "zipcode",
      type: "number",
      placeholder: zipCode || "000000",
      minLength: "4",
      maxLength: "15",
    },
  ];

  return (
    <section className="py-10 relative tab:py-60px laptop:pb-0 laptop:pt-20">
      <div className="absolute bg-aside blur-[100px] h-full rotate-[15deg] w-full -z-20 tab:left-1/3 laptop:left-[60%] dark:bg-darkAside"></div>
      <h1 className="font-bold text-28 leading-54 mb-10 mx-5 tab:mb-10 tab:mx-10 tab:text-32 bigTab:mx-60px laptop:mb-60px desktop:mb-20 desktop:text-4xl">
        Profile Settings
      </h1>
      <div className="relative max-w-full">
        <div className="bg-dark relative rounded-all py-60px shadow-lg text-light laptop:py-24 dark:bg-white dark:text-dark">
          <div className="mb-10 px-30px tab:px-50px bigTab:px-70px laptop:px-100px">
            <Heading
              sectionHeader="Profile Login Information"
              text="Update your login information."
            />
          </div>
          <AuthForm
            form={form}
            success={success}
            errors={errors}
            inputs={authFields}
            validateData={data}
          />
          <div className="mb-10 mt-60px px-30px tab:px-50px bigTab:px-70px laptop:mt-24 laptop:px-100px">
            <Heading
              sectionHeader="Profile Personal Information - Optional"
              text="Tell us more about yourself."
            />
          </div>
          <PersonalForm
            success={success}
            errors={errors}
            inputs={personalFields}
            handler={handlePersonalData}
          />
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
