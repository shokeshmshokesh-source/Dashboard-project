import "./Dashboard.css";
function Dashboard(){
    return(
        <div className="main-container">
            <div className="calass-card">

                <h2>adiminpanel</h2>
                <a className="sidebar-link active" href="#dashboard">dashboard</a>
                <p>users</p>
                <p>orders</p>
                <p>settings</p>
                <button>logout</button>
            </div>

            <div className="heading" id="dashboard">
                <h1>admin Dashboard</h1>
                <p>welcome back admin</p>
            
            <div className="box">
                <h2>total user</h2>
                <p>1,250</p>
                </div>

                <div className="box" >

                <h2>total orders</h2>
                <p>320</p>
                </div>

                <div className="box">

                <h2>revenue</h2>
                <p>45,000</p>
                </div>
             </div>

            

            <h2>recent users</h2>

            <table>

                <tr>
                 <th>name</th>
                 <th>email</th>
                 <th>status</th>
                </tr>

                <tr>
                    <td>neelu</td>
                    <td>neelu@gamil.com</td>
                    <td><span className="user-status active-status">active</span></td>    
                </tr>

                <tr>
                    <td>sokesh</td>
                    <td>sokesh@gamil.com</td>
                    <td><span className="user-status active-status">active</span></td>
                </tr>
                 <tr>
                    <td>unknow</td>
                    <td>unknow@gamil.com</td>
                    <td><span className="user-status pending-status">pending</span></td>
            

                 </tr>

            </table>


        </div>
    )
}
export default Dashboard;
