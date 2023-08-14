import { Fragment, lazy } from "react";
import { Link } from "react-router-dom";

const Switcher = lazy(() => import("./switcher"));

const FooterLinks = ({ links, checked, toggleMode }) => {
	return (
		<ul className="font-bold gap-x-20 hidden mb-120px laptop:flex laptop:justify-center">
			{links.map(({ path, content }, index) => (
				<Fragment key={index}>
					<li className="active:rotate-3 focus:rotate-3 hover:rotate-3">
						<Link
							to={path}
							className="outline-0 underline underline-offset-2"
						>
							{content}
						</Link>
					</li>
					<li>/</li>
				</Fragment>
			))}
			<li>
				<Switcher checked={checked} onChange={toggleMode} />
			</li>
		</ul>
	);
};

export default FooterLinks;
