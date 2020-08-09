function Section(props) {
    return (
        <div class="section">
            <div className="section-title"><h2>{props.title} →</h2></div>
            

            {props.children}

        </div>
    )
}

export default Section