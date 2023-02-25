import './design_board.css'

export default function DesignBoard() {

  let bodyStyles = {
    display:'flex',
    flexDirection:'row',
    JustifyContent:'center',
    height:'100vh'
  }

  let boardStyles = {
    width:'80%',
    backgroundColor:'#eab676'
  }

  let sidebarStyles = {
    width:'20%',
    backgroundColor:'#f9e9d6',
  }

  let templatesStyles = {
    height:'50%',
    width:'100%',
    backgroundColor:'#f2d3ad',
  }

  let itemsStyles = {
    height:'50%',
    width:'100%',
    backgroundColor:'#f0cc9f',
  }

    return (
      <div className="body" style={bodyStyles}>
        <div className='board' style={boardStyles}>Hello World</div>
        <div className="sidebar" style={sidebarStyles}>
          <div className="templates" style={templatesStyles}>Templates</div>
          <div className="items" style={itemsStyles}>Beads and Pendants</div>
        </div>
      </div>
    );
  }
  

  