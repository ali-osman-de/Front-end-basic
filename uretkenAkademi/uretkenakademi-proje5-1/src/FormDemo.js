import React, { Component } from 'react';

class FormDemo extends Component {
    state = {
        kullaniciAdi:""
    }
    onChangeHandle=(event)=>{
        this.setState({
            kullaniciAdi:event.target.value
        })
    }
    onSubmitHandler=(event)=>{
        alert(this.state.kullaniciAdi)
    }
    render() {
        
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h3>Kullanıcı Adı</h3>
                    <input type="text" onChange={this.onChangeHandle} />
                    <h2>kullanicinin adi {this.state.kullaniciAdi}</h2>
                    <input type="submit" value="Submit"/>
                </form>
                
            </div>
        );
    }
}

export default FormDemo;