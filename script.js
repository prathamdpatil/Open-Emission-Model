const emissionData = {
    heading: "New Emission Found",
    categories: [
      {
        title: "Category 1",
        instructions: [
          "Ensure all sensors are calibrated before operation.",
          "Check the emission levels at regular intervals.",
          "Always maintain the equipment for optimal performance."
        ]
      },
      {
        title: "Category 2",
        instructions: [
          "Make sure the system is running on safe mode during tests.",
          "Analyze data from the last 24 hours to detect anomalies.",
          "Log the operational hours of the equipment."
        ]
      },
      {
        title: "Category 3",
        instructions: [
          "Perform system diagnostics once a week.",
          "Maintain proper ventilation for emission control.",
          "Regularly check and clean filters in the equipment."
        ]
      },
      {
        title: "Category 4",
        instructions: [
          "Update emission control software monthly.",
          "Document any unusual events or issues.",
          "Communicate with the team if any failures are detected."
        ]
      },
      {
        title: "Category 5",
        instructions: [
          "Ensure backup power sources are functional.",
          "Test emergency systems every quarter.",
          "Maintain a log of maintenance activities."
        ]
      }
    ]
  };

  // Function to dynamically load data into the modal
  function loadModalData(data) {
    // Set modal title
    document.getElementById('emissionModalLabel').textContent = data.heading;
    
    // Clear previous modal body content
    const modalBody = document.getElementById('modalBodyContent');
    modalBody.innerHTML = ''; // Clear previous data

    // Loop through categories and add dynamic content
    data.categories.forEach(category => {
      // Create a category title
      const categoryTitle = document.createElement('h6');
      categoryTitle.textContent = category.title;
      modalBody.appendChild(categoryTitle);
      
      // Create a list of instructions
      const ul = document.createElement('ul');
      category.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        ul.appendChild(li);
      });
      
      modalBody.appendChild(ul);
    });
  }

  // Event listener to open modal and load dynamic content
  document.getElementById('openModalBtn').addEventListener('click', function () {
    loadModalData(emissionData); // Load dynamic data into modal
    var myModal = new bootstrap.Modal(document.getElementById('emissionModal'));
    myModal.show();
  });

  // Save button functionality (example of what to do on Save click)
  document.getElementById('saveBtn').addEventListener('click', function () {
    alert('Data Saved!');
    var myModalEl = document.getElementById('emissionModal');
    var modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
  });