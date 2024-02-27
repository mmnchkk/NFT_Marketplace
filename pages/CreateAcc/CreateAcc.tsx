import "./CreateAcc.css"
import { Header, Footer } from "../../components/index"
import { CosmoTwo } from "../../img/index"

const CreateAcc = () => {
  return (
    <div>
      <Header/>
      <main className="main-create">
        <div className="create-acc">
          <div className="create-acc-img">
            <img src={CosmoTwo} alt="" />
          </div>
          <div className="create-acc-info">
            <h2 className="pages-title">Create account</h2>
            <p className="pages-desc">Welcome! enter your details and start</p>
            <p className="pages-desc">creating, collecting and selling NFTs.</p>
            <div className="create-acc-form">
              <input type="text" placeholder="Username" required/>
              <input type="email" placeholder="Email Address" required/>
              <input type="password" placeholder="Password" required/>
              <input type="password" placeholder="Confirm Password" required/>
              <button>Create account</button>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default CreateAcc