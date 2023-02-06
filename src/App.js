import logo from "./logo.svg";
import "./App.css";
import PriceCard from "./PriceCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css"

function App() {
  
  let planDetails=[
    {
      plan:"Free",
      price:0,
      user:"Single user",
      userEnable:true,
      storage:"5GB Storage",
      storageEnable:true,
      publicProject:"Unlimited Public Project",
      publicEnable:true,
      access:"Community access",
      accessEnable:true,
      privateProject:"Unlimited Private Project",
      privateEnable:false,
      support:"Dedicated phone support",
      supportEnable:false,
      subdomain:"Free subdomain",
      domainEnable:false,
      status:"Monthly status reports",
      statusEnable:false
    },
    {
      plan:"Plus",
      price:9,
      user:"5 user",
      userEnable:true,
      storage:"50GB Storage",
      storageEnable:true,
      publicProject:"Unlimited Public Project",
      publicEnable:true,
      access:"Community access",
      accessEnable:true,
      privateProject:"Unlimited Private Project",
      privateEnable:true,
      support:"Dedicated phone support",
      supportEnable:true,
      subdomain:"Free subdomain",
      domainEnable:true,
      status:"Monthly status reports",
      statusEnable:false
    },
    {
      plan:"Pro",
      price:49,
      user:"Unlimited users",
      userEnable:true,
      storage:"150GB Storage",
      storageEnable:true,
      publicProject:"Unlimited Public Project",
      publicEnable:true,
      access:"Community access",
      accessEnable:true,
      privateProject:"Unlimited Private Project",
      privateEnable:true,
      support:"Dedicated phone support",
      supportEnable:true,
      subdomain:"Free subdomain",
      domainEnable:true,
      status:"Monthly status reports",
      statusEnable:true
    }
  ]



  return (<div>
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
     { planDetails.map((ele) => <PriceCard result={ele}/>)}
     </div>
    </div>
    </section>
    </div>
  );
}

export default App;