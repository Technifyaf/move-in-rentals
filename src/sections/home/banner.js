/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Link } from 'theme-ui';
import { rgba } from 'polished';
import React, { useState } from 'react';
import { useRouter } from 'next/router'


import Select from 'components/select';
import bannerBg from 'assets/images/banner-bg.jpg';
import mapMarker from 'assets/images/icons/map-marker.png';

const options = [
	{
		id: 1,
		label: 'Co-working space',
		value: 'co-workingspace',
	},
	{
		id: 2,
		label: 'Exclusive Office ',
		value: 'Exclusive Office',
	},
	{
		id: 3,
		label: 'Land',
		value: 'Land',
	},
	{
		id: 4,
		label: 'Industrial',
		value: 'Industrial',
	},
	{
		id: 5,
		label: 'Residential',
		value: 'Residential',
	},
	{
		id: 6,
		label: 'Retail',
		value: 'Retial',
	},
	{
		id: 7,
		label: 'Lodging',
		value: 'Loging',
	},
	{
		id: 8,
		label: 'Venues and Halls',
		value: 'Venues and Halls',
	},
	{
		id: 9,
		label: 'Other',
		value: 'other',
	},
];

export default function Banner() {

	const [type_value, setValue] = useState("Co-workingspace");
	const router = useRouter()

	const onChange = (event) => {
		setValue(event.target.value);
	  };

	const handleSubmit = (e) => {
		
		e.preventDefault();
		console.log(type_value)
		router.push({pathname: '/search',
		search: 'type='+type_value})
	//	alert(type_value)
	   
	};

	return (
		<Box as='section' id='home' sx={styles.section}>
			<Container>
				<Box sx={styles.contentWrapper}>
					<Box sx={styles.bannerContent}>
						<Heading as='h1' sx={styles.heroTitle}>
							Welcome to the Real Estate universe.
						</Heading>
						<Text as='p' sx={styles.desc}>
						What type of space are you looking for?
						</Text>
						<Box as='form' onSubmit={handleSubmit}>
							<Select
								id='location'
								label='Search'
								defaultValue={options[1].label}
								sx={styles.select}
								icon={mapMarker}
								onChange={onChange}
							>
								{options?.map((option) => (
									<option value={option.value} key={option.id}>
										{option.label}
									</option>
								))}
							</Select>
						
								<Button sx={styles.button} variant='primary'>
								Search
								</Button>
							
						
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}

const styles = {
	section: {
		background: `url(${bannerBg}) no-repeat center top / cover`,
		backgroundSize: ['100%', null, null, null, 'cover'],
	},
	contentWrapper: {
		display: 'flex',
		alignItems: 'center',
		minHeight: [null, null, null, null, '50vh', '100vh'],
	},
	bannerContent: {
		backgroundColor: rgba('#fff', 0.93),
		boxShadow: [
			'0px 10px 16px rgba(52, 61, 72, 0.12)',
			null,
			null,
			null,
			'none',
		],
		maxWidth: [null, null, null, 600, 500, null, 650],
		padding: [
			'20px',
			'30px',
			null,
			null,
			null,
			'30px 50px 60px',
			'50px 60px 90px',
		],
		borderRadius: 5,
		m: ['110px 0 0', null, null, '110px auto 0', '60px 0 0', null, 0],
		'@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
			maxWidth: 515,
			mt: 70,
			padding: '30px 50px 65px',
		},
	},
	heroTitle: {
		fontSize: [22, 28, 28, 40, , 5, 6],
		fontWeight: 700,
		letterSpacing: 'heading',
		lineHeight: [1.4, null, null, null, null, null, 1.57],
		'@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
			fontSize: 40,
		},
	},
	desc: {
		fontSize: [15, 16, 15, 17],
		lineHeight: [1.53, 1.53, 1.53, 2, 2.4, 2, 2.48],
		maxWidth: 440,
		marginTop: [15, 15, 15, null, null, null, 30],
		'@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
			mt: 15,
		},
	},
	select: {
		marginTop: 30,
		select: {
			minWidth: ['auto', 'auto', 'initial'],
		},
	},
	button: {
		fontSize: 20,
		fontWeight: 700,
		marginTop: 20,
		width: '100%',
		minHeight: [50, null, null, null, 60],
		fontSize: [16, 16, 16, 20],
		':focus': {
			outline: '0 none',
		},
	},
	link: {
		textDecoration : 'none',
		svg: {
		  transition: 'margin-left 0.3s ease-in-out 0s',
		},
		':hover': {
		  svg: {
			ml: '5px',
		  },
		},
	  },
};
