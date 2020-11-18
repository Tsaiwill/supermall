<template>
 <div class="wrapper">
   <ul class="content">
     <li>catagory1</li>
     <li>catagory2</li>
     <li>catagory3</li>
     <li>catagory4</li>
     <li>catagory5</li>
     <li>catagory6</li>
     <li>catagory7</li>
     <li>catagory8</li>
     <li>catagory9</li>
     <li>catagory10</li>
     <li>catagory11</li>
     <li>catagory12</li>
     <li>catagory13</li>
     <li>catagory14</li>
     <li>catagory15</li>
     <li>catagory16</li>
     <li>catagory17</li>
     <li>catagory18</li>
     <li>catagory19</li>
     <li>catagory20</li>
     <li>catagory21</li>
     <li>catagory22</li>
     <li>catagory23</li>
     <li>catagory24</li>
     <li>catagory25</li>
     <li>catagory26</li>
     <li>catagory27</li>
     <li>catagory28</li>
     <li>catagory29</li>
     <li>catagory30</li>
     <li>catagory31</li>
     <li>catagory32</li>
     <li>catagory33</li>
     <li>catagory34</li>
     <li>catagory35</li>
     <li>catagory36</li>
     <li>catagory37</li>
     <li>catagory38</li>
     <li>catagory39</li>
     <li>catagory40</li>
     <li>catagory41</li>
     <li>catagory42</li>
     <li>catagory43</li>
     <li>catagory44</li>
     <li>catagory45</li>
     <li>catagory46</li>
     <li>catagory47</li>
     <li>catagory48</li>
     <li>catagory49</li>
     <li>catagory50</li>
     <li>catagory51</li>
     <li>catagory52</li>
     <li>catagory53</li>
     <li>catagory54</li>
     <li>catagory55</li>
     <li>catagory56</li>
     <li>catagory57</li>
     <li>catagory58</li>
     <li>catagory59</li>
     <li>catagory60</li>
     <li>catagory61</li>
     <li>catagory62</li>
     <li>catagory63</li>
     <li>catagory64</li>
     <li>catagory65</li>
     <li>catagory66</li>
     <li>catagory67</li>
     <li>catagory68</li>
     <li>catagory69</li>
     <li>catagory70</li>
     <li>catagory71</li>
     <li>catagory72</li>
     <li>catagory73</li>
     <li>catagory74</li>
     <li>catagory75</li>
     <li>catagory76</li>
     <li>catagory77</li>
     <li>catagory78</li>
     <li>catagory79</li>
     <li>catagory80</li>
     <li>catagory81</li>
     <li>catagory82</li>
     <li>catagory83</li>
     <li>catagory84</li>
     <li>catagory85</li>
     <li>catagory86</li>
     <li>catagory87</li>
     <li>catagory88</li>
     <li>catagory89</li>
     <li>catagory90</li>
     <li>catagory91</li>
     <li>catagory92</li>
     <li>catagory93</li>
     <li>catagory94</li>
     <li>catagory95</li>
     <li>catagory96</li>
     <li>catagory97</li>
     <li>catagory98</li>
     <li>catagory99</li>
     <li>catagory100</li>
   </ul>
 </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "category",
    data() {
      return {
        scroll: null
      }
    },
    created() {

    },
    mounted() {
      this.scroll =  new BScroll(document.querySelector('.wrapper'), {
        probeType: 3,
        pullUpLoad: true
      })

      this.scroll.on('scroll', (position) => {
        console.log(position);
      })

      this.scroll.on('pullingUp', () => {
        console.log('上拉加载更多');
      })
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 200px;
    background-color: #ff8198;

    overflow: hidden;
    /*overflow-y: scroll;*/
  }
</style>
