;'use strict';
import React from 'react';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudSunRain} 	 from "@fortawesome/pro-duotone-svg-icons";

import './Brand.scss';
const Brand = () => { 'use strict';
	const brandInfo = Object.seal({
		title: 'Sol Data Consulting'
	});
	return (
		<div className="brand">
			<div>
				<FontAwesomeIcon icon={faCloudSunRain} className="sunIcon" title={brandInfo.title} />
			</div>
			<div>
				<h1 className="brandName">
					{brandInfo.title}
				</h1>
			</div>
		</div>

	);
}

export default Brand;