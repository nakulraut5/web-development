

const container = document.querySelector('.js-container');
const root = ReactDOM.createRoot(container);
setInterval(() => {
    const time = dayjs().format('HH:mm:ss');
    const div = (
        <div>
            <p>This is time {time}</p>
        </div>
    );
    root.render(div);
}, 1000);
