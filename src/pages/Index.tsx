import { Vue, Component } from 'vue-property-decorator'
import style from './index.module.scss'
@Component
export default class Index extends Vue {
    // 相当于js中的data中的其中一个属性
    private title?: string = 'I am title'
    private author?: string = 'Catci'
    // 相当于computed中的函数
    get authorComputed() {
        return `作者是：${this.author}`
    }
    create() {
        console.log("我是默认的生命周期")
    }
    //相当于methods
    handleClick(arg: string): void {
        this.title = arg
    }
    render() {
        return (
            <div class='index-page'>
                <h2>{this.title}<small>---By {this.author}</small></h2><p>{this.authorComputed}</p>
                <button class={style['p-btn']} onclick={this.handleClick.bind(this, '我是新标题')}>Change Title</button>
                <br />
                <h2>
                    测试v-modle改变author
                </h2>
                <input type="text" v-model={this.author} />
            </div>
        )
    }
}