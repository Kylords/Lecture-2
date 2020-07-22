var student =
{
  name: "",
  type: "student"
};

document.addEventListener('D0MContentLoaded', contentLoaded);

function contentLoaded(event)
{
  document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event)
{
  calculateNumericOutput();
}

function calculateNumericOutput()
{
  student.name = document.getElementById('name').value;

  var totalNameValue = 0;
  for (var i = 0; i < student.name.length; i++)
  {
    totalNameValue += student.name.charCodeAt(i);
  }

  // Inser result into page
  var ouput = "Total Numeric value of person's name is " + totalNameValue;
  document.getElementById('output').innerText = output;
}
