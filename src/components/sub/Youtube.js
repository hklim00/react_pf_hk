import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function Youtube() {
	const [Videos, setVideos] = useState([]);

	useEffect(() => {
		const key = 'AIzaSyBDL1S8asY8CR73ihG02orQB3BdWha5F1A';
		const playlistId = 'PL_RxE5V-zXWLz8bPJ5xi6dsdqg2mnwgPr';
		const num = 6;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

		axios.get(url).then((json) => {
			setVideos(json.data.items);
		});
	}, []);

	return (
		<Layout name={'Youtube'}>
			{Videos.map((video, idx) => {
				return (
					<article key={video.id}>
						<div className='inner'>
							<div className='txt'>
								<h2>{video.snippet.title.split('playlist')[1]}</h2>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Ipsum quam quisquam quaerat voluptatum, facere modi.
								</p>
							</div>
							<div className='pic'>
								<img src={video.snippet.thumbnails.high.url} alt='' />
							</div>
						</div>
						<FontAwesomeIcon icon={faPlay} />
					</article>
				);
			})}
		</Layout>
	);
}

export default Youtube;
