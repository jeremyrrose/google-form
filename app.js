console.log($)

const formSubmit = () => {

    // configuration
    // your google form URL
    const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdVSr-EEV6-1pWubPRYvFq2g2336RlMe89OQSoJ3AGV8B7-yg/formResponse?'
    
    // find tag names on Google Form
    const nameTag = "entry.1876264650";
    const emailTag = "entry.909638995";
    const messageTag = "entry.1105607115";

    // find form values via jQuery
    const name = $('[name="name"]');
    const email = $('[name="email"]');
    const message = $('[name="message"]');
    console.log(name, email, message)

    // send the content via POST
    fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `${nameTag}=${name.val()}&${emailTag}=${email.val()}&${messageTag}=${message.val()}`
    })
    .then(res => {
        // clear the fields and give the user feedback
        console.log(res.body);
        name.val('');
        email.val('');
        message.val('');
        $('.confirmation').text('Your message has been sent. Thanks!') 
        })
    .catch(err => console.log(err))

}

// add event listener to button
$('#formSubmit').on('click', formSubmit)

