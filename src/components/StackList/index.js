import './StackList.css'

const StackList = ({items}) => {
    return (
        <div className='stacklist'>
            {items.map(item => <img src={'/stack-icons/'+item+'.png'} width={'64px'} alt='stacks'></img>)}
        </div>
    )
}

export default StackList