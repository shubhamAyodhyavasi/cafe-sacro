import React from 'react'
import { Menu, AccountCircle, Search,LocalDining } from '@material-ui/icons';
function AboutSection() {

  return (
    <div className="bannerbottom">
	<div className="container">
		<div className="bannerbottomgrids">
			<div className="col-md-6 bottomleft">
				<h5>we are special in</h5>
				<h3>making delicious dishes</h3>
				<p>Vestibulum ante ipsum primis in faucibus  ante ipsum primis in faucibus orci luctus et orci luctus et ultrices.faucibus orci luctus et ultrices lore ipsum dolor sit amet faucibus  ante ipsum primis in faucibus orci luctus</p>
					<div className="agile-services-left-grid">
						<div className="services-icon">
							<div className="col-md-2">
								<div className="services-icon-info">
								<LocalDining />
								</div>
							</div>
							<div className="col-md-10 services-icon-text">
								<h3>Maecenas cursus ligula</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Maecenas cursus ligula quis malesuada placerat. </p>
							</div>
							<div className="clearfix"> </div>
						</div>
						<div className="services-icon">
							<div className="col-md-2">
								<div className="services-icon-info">
								<LocalDining />
								</div>
							</div>
							<div className="col-md-10 services-icon-text">
								<h3>Maecenas cursus ligula</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Maecenas cursus ligula quis malesuada placerat. </p>
							</div>
							<div className="clearfix"> </div>
						</div>
						<div className="services-icon">
							<div className="col-md-2">
								<div className="services-icon-info">
								<LocalDining />
								</div>
							</div>
							<div className="col-md-10 services-icon-text">
								<h3>Maecenas cursus ligula</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Maecenas cursus ligula quis malesuada placerat. </p>
							</div>
							<div className="clearfix"> </div>
						</div>
						<div className="clearfix"> </div>
					</div>
			</div>
			<div className="col-md-1">
			</div>
			<div className="col-md-5 bottomright">
				<img src="https://demo.w3layouts.com/demos_new/template_demo/12-12-2017/food_recipe-demo_Free/310626425/web/images/bottom.jpg" alt="" />
				<div className="positiongrid1">
					<h4>Cooking is one of the great gifts you can give to your love</h4>
				</div>
				<div className="positiongrid2">
					<h4>Food is essential to life therefore make it good and eat it</h4>
				</div>
			</div>
			<div className="clearfix"> </div>
		</div>
	</div>
</div>
  
  )
}



export default AboutSection;

