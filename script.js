let genTimesheetBtn = document.getElementById("gen-timesheet-btn");
let genSalesbookBtn = document.getElementById("gen-salesbook-btn");
let spinnerTimesheetButton = document.getElementById("spinner-timesheet-button");
let spinnerSalesbookButton = document.getElementById("spinner-salesbook-button");
let viewTimesheetBtn = document.getElementById("view-timesheet-btn");
let viewSalesbookBtn = document.getElementById("view-salesbook-btn");
let report = document.getElementById("report")
let iFrame = document.getElementById("iFrame")

genTimesheetBtn.addEventListener("click", async () => {
    spinnerTimesheetButton.style.display = "inline-block";
    genTimesheetBtn.style.display = "none";

    try {
    const res = await fetch(`https://timesheet-api-report.herokuapp.com/test-timesheet`)
    const data = await res.json();
    Swal.fire({
        title: 'Success!',
        text: `${data.message}`,
        icon: 'success',
        confirmButtonText: 'Close'
      })
    console.log(data);
    } catch(error) {
        console.log(error)
        Swal.fire({
            title: 'Error!',
            text: `Something went wrong, try again.`,
            icon: 'error',
            confirmButtonText: 'Close'
          })
    }
      spinnerTimesheetButton.style.display = "none";
      genTimesheetBtn.style.display = "inline-block";
})

viewTimesheetBtn.addEventListener("click", async () => {
    iFrame.src = `https://timesheet-api-report.herokuapp.com/report-timesheet`
})

genSalesbookBtn.addEventListener("click", async () => {
    spinnerSalesbookButton.style.display = "inline-block";
    genSalesbookBtn.style.display = "none";
    try {
        const res = await fetch(`https://salesbook-api-report.herokuapp.com/test-salesbook`)
        const data = await res.json();
        Swal.fire({
            title: 'Success!',
            text: `${data.message}`,
            icon: 'success',
            confirmButtonText: 'Close'
          })
        console.log(data);
        } catch(error) {
            console.log(error)
            Swal.fire({
                title: 'Error!',
                text: `Something went wrong, try again.`,
                icon: 'error',
                confirmButtonText: 'Close'
              })
        }

      spinnerSalesbookButton.style.display = "none";
      genSalesbookBtn.style.display = "inline-block";
})

viewSalesbookBtn.addEventListener("click", async () => {
    iFrame.src = `https://salesbook-api-report.herokuapp.com/report-salesbook`
})






