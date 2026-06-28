import { shallowMount } from '@vue/test-utils'
import SectionDivider from '@/components/SectionDivider.vue'

describe('SectionDivider.vue', () => {
  it('renders the divider text', () => {
    const wrapper = shallowMount(SectionDivider, {
      props: {
        data: 'Recent activity'
      }
    })

    expect(wrapper.text()).toMatch('Recent activity')
  })
})
