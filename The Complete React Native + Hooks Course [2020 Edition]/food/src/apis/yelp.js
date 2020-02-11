import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer TnuCaMQ7QA6m-i3AVLl3QvBN3ufM-Er_JmAjhDZH1WomKvq50ar3zs3xafKYvp6bzxiKdJPxMt5LKiVNm-G0c-uQi3_TnDayZbleOtjlXEoi9Q0fYFGs8MyHuapCXnYx'
    }
})