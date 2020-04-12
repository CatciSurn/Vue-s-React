import { Vue, Component } from 'vue-property-decorator'
import Test from '@/components/Test'
@Component
export default class Login extends Vue {
    private title?: string = 'i am Login page'

    private msg: string = 'i am Loginis Msg'

    private value: string = 'i am not Logins Msg'

    get getValue() {
        return `组件外部的value：${this.value}`
    }
    render() {
        return (
            <div>
                {this.title}<br />
                {this.getValue}
                <Test msg={this.msg}></Test>
            </div>
        )
    }
}