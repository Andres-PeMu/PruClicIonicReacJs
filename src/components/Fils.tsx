import PeopleApi from "./Peoples"

function Fils({ dataFils = [] }) {
    return (
        <div className="row">
            {
                dataFils.map((item, index)=> (
                    <div key={index} className="col mb-4">
                        <div className="card">
                            <div className="card-boby">
                                <h2 className="card-title col mb-4">{item.title}</h2>
                                <PeopleApi />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Fils