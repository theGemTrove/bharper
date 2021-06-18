import React from 'react';

import Brand from "./features/Brand/Brand";

import './Splash.scss';
const Splash = () => {
	return (
		<div id="pageContainer">
			<header className="header">
				<Brand />
				<h2 className="brand">Hey There, the name's Branden</h2>
				<div>
					<h3>Experience</h3>
					<ul>
						<li>20 years SysAdmin and Security Experience</li>
						<li>15 years of Telecom Experience</li>
						<li>10 years of development Experience</li>
					</ul>
				</div>
				<div>
					<h3>Services</h3>
					<ul>
						<li>
							IT/System Administration & Networking
							<ul>
								<li>Setting up new application environments</li>
								<li>Securing Systems & Networks</li>
								<li>Security Scanning</li>
								<li>Private Network (VLAN) Connectivity</li>
								<li>Routing</li>
								<li>AWS/S3 Experience</li>
							</ul>
						</li>
						<li>
							Telephony
							<ul>
								<li>Building and maintaining PBX</li>
								<li>Carrier/TSP Interconnectivity</li>
								<li>Troubleshooting</li>
								<li>Application Development</li>
							</ul>
						</li>
					</ul>
				</div>
				<div>
					<h3>Request Services</h3>
					<p>Branden Harper - bharper@sd0c.com</p>
				</div>

			</header>
		</div>
	);
};

export default Splash;