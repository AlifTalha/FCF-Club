function generatePDF() {
  
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const position = document.getElementById("position").value;
    const post = document.getElementById("post").value;
    const jursyNumber = document.getElementById("jursyNumber").value;
  

    if (!firstName || !lastName || !email || !phone || !position || !post || !jursyNumber) {
      alert("Please fill in all the fields before submitting.");
      return;
    }
  
 
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
 
    doc.setFontSize(16);
    doc.text("FCF Sports Club Registration", 10, 10);
    
    doc.setFontSize(12);
    doc.text(`First Name: ${firstName}`, 10, 30);
    doc.text(`Last Name: ${lastName}`, 10, 40);
    doc.text(`Email: ${email}`, 10, 50);
    doc.text(`Phone Number: ${phone}`, 10, 60);
    doc.text(`Position: ${position}`, 10, 70);
    doc.text(`Post: ${post}`, 10, 80);
    doc.text(`Jersey Number: ${jursyNumber}`, 10, 90);
  

    doc.save(`${firstName}_${lastName}_Registration.pdf`);
  }
  


