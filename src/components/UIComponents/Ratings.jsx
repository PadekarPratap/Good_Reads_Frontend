import {BiStar, BiSolidStar, BiSolidStarHalf} from 'react-icons/bi'

const Ratings = ({value, color, views}) => {
  return (
    <div className='flex items-center' >
        <div className='mr-2' >
            <span className='font-bold text-[#e69d24]' >{value.toFixed(1)}</span>
        </div>
        <div>
            {value >= 1 ? <BiSolidStar color={color} /> : value >= 0.5 ? <BiSolidStarHalf color={color} /> : <BiStar color={color}/>}
        </div>
        <div>
            {value >= 2 ? <BiSolidStar color={color} /> : value >= 1.5 ? <BiSolidStarHalf color={color} /> : <BiStar color={color}/>}
        </div>
        <div>
            {value >= 3 ? <BiSolidStar  color={color}/> : value >= 2.5 ? <BiSolidStarHalf color={color} /> : <BiStar color={color}/>}
        </div>
        <div>
            {value >= 4 ? <BiSolidStar  color={color}/> : value >= 3.5 ? <BiSolidStarHalf color={color} /> : <BiStar color={color}/>}
        </div>
        <div >
            {value >= 5 ? <BiSolidStar  color={color}/> : value >= 4.5 ? <BiSolidStarHalf  color={color}/> : <BiStar color={color} />}
        </div>
        {views && <div className='ml-2 text-slate-600' >
            ({views.toLocaleString()})
        </div>}
    </div>
  )
}

Ratings.defaultProps = {
    color: '#e69d24',
    views: null
}

export default Ratings