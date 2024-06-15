import { participantTemplate, submittedTemplate } from './templates.js';

document.addEventListener('DOMContentLoaded', function(){
    let participants = 1;

    const button = document.getElementById('add');
    const participantsSection = document.querySelector('.participants');
    
    button.addEventListener('click', function(){
        participants += 1;
        const newParticipant = document.createElement('section');
        newParticipant.classList.add('participant' + participants);
        newParticipant.innerHTML = participantTemplate(participants);
        participantsSection.appendChild(newParticipant);
    });

    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event){
        event.preventDefault();
        
        let totalFees = 0;
        
        for (let i = 1; i <= participants; i++) {
            const fee = parseFloat(document.getElementById('fee' + i).value);
            totalFees += fee;
        }
        
        const name = document.getElementById('adult_name').value;
        form.style.display = 'none';
        document.body.insertAdjacentHTML('afterend', submittedTemplate(name, participants, totalFees));
    });
});

