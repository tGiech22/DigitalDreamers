//const API_KEY = "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"
const API_KEY = "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"
//const submitIcon = document.querySelector("myButton")
const inputElement = document.querySelector('.images-section')

var button = document.getElementById("button1")

const getImages = async () => {
	const options = {
		method: "POST",
		headers: {
			"Authorization": 'Bearer ${API_KEY}',
			'Content-Type': "application/json"
		},
		body: JSON.stringify({
			"prompt": "Dark and mysterious forest",
			"n": 1,
			"size": "1024x1024"
		})
	}
	try {
		const response = await fetch('https://api.openai.com/v1/images/generations', options)
		const data = await response.json()
		console.log(data)
        
        /*
		data?.data.forEach(imageObject => {
			const ImageContainer = document.createElement('div')
			ImageContainer.classList.add('image-container')
			const imageElement = document.createElement('img')
			imageElement.setAttribute('src', imageObject.url)
			ImageContainer.append(imageELement)
			imageSection.append(ImageContainer)
		})*/
	} catch (error) {
		console.error(error)
	}
}

button.addEventListener('click', getImages)