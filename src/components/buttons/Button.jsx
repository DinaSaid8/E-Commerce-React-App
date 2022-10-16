
export default function Button(props) {
    let { action, title } = props;
    return <button className="btn btn-primary m-4 px-5" onClick={action}>{title}</button>;
}