

$(function () {

    let inp_name = $('#name')
    let inp_age = $('#age')
    let inp_city = $('#city')
    let btn_submit = $('#submit')
    let tbl_persons = $('#persons')

    function refreshPersonTable (persons) {
        tbl_persons.empty()
        tbl_persons.append(
            `<tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            </tr>`
        )
        for (person of persons) {
            tbl_persons.append(
                `<tr>
                    <td>${person.name}</td>
                    <td>${person.age}</td>
                    <td>${person.city}</td>
                </tr>`
            )
        }
    }

    $.get('/api/persons', function (data) {
        refreshPersonTable(data)
    })

    btn_submit.click(function () {
        $.post('/api/persons', 
        {
            name: inp_name.val(),
            age: inp_age.val(),
            city: inp_city.val()
        },
        function (data) {
            refreshPersonTable(data)
        }
    )

    })

})