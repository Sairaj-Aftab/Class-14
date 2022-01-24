
const te_form = document.querySelector('.team #form');
const t_member = document.querySelector('.team .team-member');


te_form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('.team input[name="name"]').value;
    const skill= document.querySelectorAll('.team input[name="skill"]:checked');
    const gender = document.querySelector('.team input[name="gender"]:checked').value;
    const photo = document.querySelector('.team input[name="photo"]').value;

    let skill_arr = [];

    for (let i = 0; i < skill.length; i++) {
        skill_arr.push(skill[i].value)
        
    }
    
    let team_arr;
    if (teGet('Team')) {
        team_arr = teGet('Team');
    } else {
        team_arr = [];
    }

    team_arr.push({
        name  : name,
        skill : skill_arr,
        gender: gender,
        photo : photo
    });
    
    teSet('Team', team_arr);

    allTeam();
})
allTeam();
function allTeam() {
    let te_get = teGet('Team');
    let t_data;
    te_get.map(data => {
        let list ='';
        data.skill.map(lists => {
            list += `<li class="list-group-item mb-1"> ${lists} </li>`
        })
        t_data += `<div class="col-md-4">
        <div class="card shadow">
            <div class="card-image">
                <img class="card-img" src="${data.photo}" alt="">
            </div>
            <div class="card-body">
                <h5 class="card-title text-center">${data.name}</h5>
                <h6>Gender : ${data.gender}</h6>
                <h6>Skill...</h6>
                <ul class="list-group">
                    ${list}
                </ul>
            </div>
        </div>
    </div>`
    })
    
    t_member.innerHTML = t_data;
}