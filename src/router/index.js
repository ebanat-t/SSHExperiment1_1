import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/top'
import Fin from '@/components/fin'
import Bye from '@/components/bye'
import D1 from '@/components/descriptions/d1'
import D2 from '@/components/descriptions/d2'
import D3 from '@/components/descriptions/d3'
import Q1 from '@/components/questions/q1'
import Q2 from '@/components/questions/q2'
import Q3 from '@/components/questions/q3'
import Q4 from '@/components/questions/q4'
import Q5 from '@/components/questions/q5'
import Q6 from '@/components/questions/q6'
import Q7 from '@/components/questions/q7'
import Q8 from '@/components/questions/q8'
import Q9 from '@/components/questions/q9'
import Q10 from '@/components/questions/q10'
import Q1_rs from '@/components/questions/q1_rs'
import Q2_rs from '@/components/questions/q2_rs'
import Q3_rs from '@/components/questions/q3_rs'
import Q4_rs from '@/components/questions/q4_rs'
import Q5_rs from '@/components/questions/q5_rs'
import Q6_rs from '@/components/questions/q6_rs'
import Q7_rs from '@/components/questions/q7_rs'
import Q8_rs from '@/components/questions/q8_rs'
import Q9_rs from '@/components/questions/q9_rs'
import Q10_rs from '@/components/questions/q10_rs'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/d1',
      name: 'D1',
      component: D1
    },
    {
      path: '/d2',
      name: 'D2',
      component: D2
    },
    {
      path: '/d3',
      name: 'D3',
      component: D3
    },
    {
      path: '/q1',
      name: 'Q1',
      component: Q1
    },
    {
      path: '/q1_rs',
      name: 'Q1_rs',
      component: Q1_rs
    },
    {
      path: '/q2',
      name: 'Q2',
      component: Q2
    },
    {
      path: '/q2_rs',
      name: 'Q2_rs',
      component: Q2_rs
    },
    {
      path: '/q3',
      name: 'Q3',
      component: Q3
    },
    {
      path: '/q3_rs',
      name: 'Q3_rs',
      component: Q3_rs
    },
    {
      path: '/q4',
      name: 'Q4',
      component: Q4
    },
    {
      path: '/q4_rs',
      name: 'Q4_rs',
      component: Q4_rs
    },
    {
      path: '/q5',
      name: 'Q5',
      component: Q5
    },
    {
      path: '/q5_rs',
      name: 'Q5_rs',
      component: Q5_rs
    },
    {
      path: '/q6',
      name: 'Q6',
      component: Q6
    },
    {
      path: '/q6_rs',
      name: 'Q6_rs',
      component: Q6_rs
    },
    {
      path: '/q7',
      name: 'Q7',
      component: Q7
    },
    {
      path: '/q7_rs',
      name: 'Q7_rs',
      component: Q7_rs
    },
    {
      path: '/q8',
      name: 'Q8',
      component: Q8
    },
    {
      path: '/q8_rs',
      name: 'Q8_rs',
      component: Q8_rs
    },
    {
      path: '/q9',
      name: 'Q9',
      component: Q9
    },
    {
      path: '/q9_rs',
      name: 'Q9_rs',
      component: Q9_rs
    },
    {
      path: '/q10',
      name: 'Q10',
      component: Q10
    },
    {
      path: '/q10_rs',
      name: 'Q10_rs',
      component: Q10_rs
    },
    {
      path: '/fin',
      name: 'fin',
      component: Fin
    },
    {
      path: '/bye',
      name: 'bye',
      component: Bye
    },
    
    
    
  ]
})
