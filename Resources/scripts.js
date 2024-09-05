document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: 'Jan 2023 - May 2014',
        title: 'Automation Engineer',
        description: 'At Genentech Inc., I excel in generating creative and elusive bugs to keep our testing team busy and entertained. Regularly praised for crafting bugs that evade detection and defy logic.'
    },
    {
        date: 'Aug 2021 - May 2022',
        title: 'Inventory Manager',
        description: 'Managed end-to-end inventory operations ensuring smooth management at every time.'
    },
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
