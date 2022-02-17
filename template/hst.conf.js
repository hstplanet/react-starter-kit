module.exports = {

    /**
     * Server Adresi
     * 
     * Server adresinizi verilen örnekteki gibi belirtin. Haberleşmeler bu adres üzerinden
     * yapılacaktır.
     * 
     */
    server: "http://localhost:4020/",
    /**
     * 
     * Sisteminizin çalıştığı adres
     * 
     * Bu adres gönderilen maillerde ve diğer işlemlerde kullanılır.
     * 
     */
    host: "http://localhost:8085/",
    /**
     * 
     * Geliştirici Modu
     * 
     * Uygulamanızı gelitirirken geliştirici modunu kullanabilirsiniz.
     * Ancak uygulamanızı yayın için build etmeden önce application (app) moduna almanızı
     * öneririz. Olası güvenlik sorunlarından kaçınmak için lütfen bu duruma dikkat edin.
     * 
     */
    app: "mobil", // "development" veya "app" 
    
    serverTarget: "local", // HST serverlarında barındırıyorsanız "cloud", eğer kendi sistemlerinizde kullanıyorsanız "local" yazın.
    
    serverPath : "",
    
    mailConfig: {
        host: "hstplanet.com",
        port: 465,
        secure: true,
        auth: {
            user: "",
            pass: "",
        }
    },

    hstcloud: {
        apiKey: "{{ name }}",
        projectId: "{{ name }}-4510144311",
        storageBucket: "6068412915",
        messagingSenderId: "3055549421",
        appId: "1:4510144311:react:1620989959022",
        measurementId: "H-8923142739",
        key : "duOAomo84IrYgwatuiwM0L1UUVrtL3usuFqggHwrRcQ="
    },

    auth: {
        emailVerification: true,
        emailVerificationURL: "mailverifiedok",
        resetPasswordURL: "login/password-new",
        actionCodeSettings: {
            url: "/mailverifiedok?Id=",
            handleCodeInApp: true
        },
        errorNotify: true
    }

}