import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Helmet from "react-helmet";

export default function Layout({ children }) {
	const data = useStaticQuery(
		graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
						menuLinks {
							name
							link
						}
					}
				}
			}
		`
	);
	return (
		<>
			<Helmet
				titleTemplate={`%s | ${data.site.siteMetadata.title}`}
				defaultTitle={data.site.siteMetadata.title}
			/>
			<div>
				<nav>
					<ul>
						{data.site.siteMetadata.menuLinks.map((item) => (
							<li key={item.link}>
								<Link to={item.link}>{item.name}</Link>
							</li>
						))}
					</ul>
				</nav>
				<div>{children}</div>
			</div>
		</>
	);
}
