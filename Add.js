import React from "react";



export default class Add extends React.Component{

    constructor(props) {
        super(props);
        this.map = new Map();
        this.state={cv:'',major:'',sex:'female'};
        this.checkboxes_values=new Map();

    }


    handleCVchange=(e)=>{
        this.setState({cv:e.target.value});
    }


    handlemajor=(e)=>{
        this.setState({major:e.target.value});
    }

    handlebtn=()=>{
        console.log(this.state.cv);
        console.log(this.state.major);
        console.log(this.state.sex);
       // console.log(this.checkboxes_values);

        for(let x of this.checkboxes_values.keys()){
          if (this.checkboxes_values.get(x)) {
              console.log(x + " " + this.checkboxes_values.get(x));
          }
        }


    }

    handleautoselect=(e)=>{
       this.setState({major:e.target.value})
    }

    handlesex=(e)=>{
        this.setState({sex:e.target.value})
    }


    handleChangehobbies=(e)=>{

           //let name=e.target.name;
        if  (e.target.checked) {
            this.checkboxes_values.set(e.target.name,true);
        }else {
            this.checkboxes_values.set(e.target.name,false);
        }
    }



    render() {


        const items=[
            {
              key:1,
              name:'swimming',
              label:'swimming'
            },{
                key:2,
                name:'reading',
                label:'reading'
            },{
                key:3,
                name:'writing',
                label:'writing'

            },
            {
                key:4,
                name:'sky',
                label:'sky'

            }

        ];


        const checkboxes_list=items.map(item=>(
            <div className="form-check-inline" key={item.key}>
            <label  className="form-check-label">
                <input type={"checkbox"} className="form-check-input" name={item.name} onChange={this.handleChangehobbies}  />
                {item.label}
            </label>
            </div>
        ));


        return(
            <div className="card">
                <div className="card-header">Form</div>
                <div className="card-body">
                    <form>

                        <div className="form-group">
                            <label>CV</label>
                            <textarea onChange={this.handleCVchange} className="form-control"/>
                        </div>


                        <div className="form-group">
                            <select onChange={this.handlemajor} value={this.state.major} className="form-control">
                                <option>please select major</option>
                                <option value="CS">CS</option>
                                <option value="CE">CE</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <textarea value={this.state.cv} className="form-control"/>
                        </div>


                        <div className="form-group">
                            <div className="form-check-inline">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" value='male' name="sex" onChange={this.handlesex} checked={this.state.sex==='male'} />
                                    male
                                </label>
                            </div>

                            <div className="form-check-inline">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="radio" value='female' name="sex" onChange={this.handlesex} checked={this.state.sex==='female'} />
                                    female
                                </label>
                            </div>
                        </div>


                        <div className="form-group">
                            hobbies
                            {checkboxes_list}
                        </div>

                        <input type="button" value="add" onClick={this.handlebtn} className="btn btn-danger"/>
                        <input type="button" value="CS" onClick={this.handleautoselect} className="btn btn-info"/>
                        <input type="button" value="CE" onClick={this.handleautoselect} className="btn btn-success"/>







                    </form>
                </div>
            </div>

        )
    }

}