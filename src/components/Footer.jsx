const Footer = () => {
	return (
		<footer className="page-footer green lighten-4">
			<div className="footer-copyright">
				<div className="container">
					ⓒ {new Date().getFullYear()} Copyright Text
					<a href="https://github.com/Liknox/e-commerce-simple" target="_blank" rel="noreferrer" className="grey-text text-lighten-4 right">
						Repo
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
