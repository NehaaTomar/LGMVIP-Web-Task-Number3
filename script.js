function fun() {
  const name = $("#name").val();
  const email = $("#email").val();
  const phone = $("#phn").val();
  const image = $("#photo").val();
  const gender = $('input[name="gender"]:checked').val();

  const skills = [];
  $("input[type=checkbox]:checked").each(function () {
    skills.push($(this).val());
  });

  if (!name || !email || !phone || !image || !gender || skills.length === 0) {
    alert("Please fill out all fields.");
    return;
  }

  const studentCard = `
    <div class="s1">
      <table>
        <tr>
          <td>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Skills:</strong> ${skills.join(", ")}</p>
          </td>
          <td><img src="${image}" width="100" height="100" /></td>
        </tr>
      </table>
    </div>
  `;

  $("#ss").append(studentCard);
  $("#fo").trigger("reset");
}
