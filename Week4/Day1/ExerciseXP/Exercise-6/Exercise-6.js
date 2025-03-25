(function(children, partner, location, job) {
  const message = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;

  const paragraph = document.createElement('p');
  paragraph.textContent = message;
  
  document.body.appendChild(paragraph);
})(2, "Alex", "New York", "Software Engineer");
