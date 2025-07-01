function addRow() {
  const table = document.getElementById("subjectsTable");
  const rowCount = table.rows.length;
  const row = table.insertRow(-1);
  row.innerHTML = `
    <td>${rowCount}</td>
    <td>
      <select class="grade">
        <option value="10">A+</option>
        <option value="9">A</option>
        <option value="8">B</option>
        <option value="7">C</option>
        <option value="6">D</option>
        <option value="5">E</option>
        <option value="0">F</option>
      </select>
    </td>
    <td><input type="number" class="credit" step="0.5" min="0.5" required></td>
  `;
}

function calculateSGPA() {
  const grades = document.getElementsByClassName("grade");
  const credits = document.getElementsByClassName("credit");

  let totalPoints = 0;
  let totalCredits = 0;
  let hasFail = false;

  for (let i = 0; i < grades.length; i++) {
    const gradePoint = parseFloat(grades[i].value);
    const credit = parseFloat(credits[i].value);

    if (isNaN(credit) || credit <= 0) {
      alert("Please enter valid credit for all subjects.");
      return;
    }

    if (gradePoint === 0) hasFail = true;

    totalPoints += gradePoint * credit;
    totalCredits += credit;
  }

  const result = document.getElementById("result");
  if (hasFail) {
    result.textContent = "SGPA: FAIL (One or more F grades)";
    result.style.color = "#e74c3c"; // red
  } else {
    const sgpa = (totalPoints / totalCredits).toFixed(2);
    result.textContent = `SGPA: ${sgpa}`;
    result.style.color = "#006400"; // dark green
  }
}
