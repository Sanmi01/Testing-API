let genTimesheetBtn = document.querySelector("#gen-timesheet-btn");
let genSalesbookBtn = document.querySelector("#gen-salesbook-btn");
let spinnerTimesheetButton = document.querySelector("#spinner-timesheet-button");
let spinnerSalesbookButton = document.querySelector("#spinner-salesbook-button");
let viewTimesheetBtn = document.querySelector("#view-timesheet-btn");
let viewSalesbookBtn = document.querySelector("#view-salesbook-btn");
let report = document.querySelector("#report")
let iFrame = document.querySelector("#iFrame")

let html = "";

genTimesheetBtn.addEventListener("click", async () => {
    spinnerTimesheetButton.style.display = "inline-block";
    genTimesheetBtn.style.display = "none";
    const res = await fetch(`https://timesheet-api-report.herokuapp.com/test-timesheet`)
    const data = await res.json();
    console.log(data);
    Swal.fire({
        title: 'Success!',
        text: `${data.message}`,
        icon: 'success',
        confirmButtonText: 'Close'
      })
      spinnerTimesheetButton.style.display = "none";
      genTimesheetBtn.style.display = "inline-block";
})

viewTimesheetBtn.addEventListener("click", async () => {
    iFrame.src = `https://timesheet-api-report.herokuapp.com/report-timesheet`
})

genSalesbookBtn.addEventListener("click", async () => {
    spinnerSalesbookButton.style.display = "inline-block";
    genSalesbookBtn.style.display = "none";
    const res = await fetch(`https://salesbook-api-report.herokuapp.com/test-salesbook`)
    const data = await res.json();
    console.log(data);
    Swal.fire({
        title: 'Success!',
        text: `${data.message}`,
        icon: 'success',
        confirmButtonText: 'Close'
      })
      spinnerSalesbookButton.style.display = "none";
      genSalesbookBtn.style.display = "inline-block";
})

viewSalesbookBtn.addEventListener("click", async () => {
    iFrame.src = `https://salesbook-api-report.herokuapp.com/report-salesbook`
})






