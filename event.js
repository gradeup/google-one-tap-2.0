window.addEventListener('message', (event) => {
	// iframe having id, used as a single source for google one tap
	const iframeElt = document.querySelector('#google-iframe');
	// iframe having class, used as a multiple source for google one tap present multiple times per page
	const iframeEltAr = [...document.querySelectorAll('.google-iframe-mul')];
	switch (event.data.type) {
		case 'displayed':
			console.log('displayed');
			// You can add any operation after the Google One Tap iframe is visible
			break;
		case 'handleGoogleYoloCb':
			if (event.data.credentials) {
				/* The returned object has been changed. Now the key is credentials in which data is present */
				console.log({
					token: event.data.credentials.credential,
				});
			}

			break;
		case 'canceled':
			console.log('Canceled due to any reason, automatically closed, 90 seconds over or user closed manually');
			break;
		case 'error':
			console.log('Some Error Occured', event.data);
			break;
		case 'height':
			// Update the parent <iframe> height to match GoogleYolo <iframe> height
			if (iframeElt) {
				iframeElt.style.height = event.data.height + 'px';
			}

			if (iframeEltAr.length > 0) {
				iframeEltAr.forEach(i => {
					if (i && i.style) {
						i.style.height = event.data.height + 'px';
					}
				});
			}

			break;
		default:
	}
});