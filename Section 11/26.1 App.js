import React, { useState, useEffect } from 'react'

const Header = () => {
  const styles = {
    background: 'linear-gradient(20deg, #6813cb, #2575fc)',
    textAlign: 'center',
    borderRadius: '0.2em',
    color: '#FFF',
    padding: '0.3em',
    margin: '0.3em',
    fontSize: '14px'
  }

  return (
    <header style={styles}>
      <h1>
        Hooks Personalizados
        <span
          role='img'
          aria-label='hook emoji'
        >
          ⚓
        </span> 
      </h1>
    </header>
  )
}

const useFetch = (url, initialState = []) => {
  const [ data, setData ] = useState(initialState)
  const [ isFetching, setFetching ] = useState(true)

  useEffect(() => {
    setFetching(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setFetching(false)
      })
  }, [ url ])

  return [
    data,
    isFetching
  ]

}

const App = () => {
  const [ clicks, setClicks ] = useState(1)
  const [ user, isLoading ] = useFetch('https://jsonplaceholder.typicode.com/users/' + clicks, {})

  const add = () => setClicks(clicks + 1)

  return (
    <div>
      <Header />
      { isLoading && <h1>Cargando...</h1> }
      <h1>{ user.name }</h1>
      <p>{ user.phone }</p>
      <button onClick={add}>
        Clicks ({ clicks })
      </button>
      {/* <ul>
        {users.map(user => (
          <li key={user.id}>
            { user.name }
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default App{"threads":[{"position":0,"start":0,"end":747,"connection":"open"},{"position":1493,"start":748,"end":1493,"connection":"closed"}],"url":"https://att-a.udemycdn.com/2019-09-14_20-18-04-ebe85aa3936232635f9cdf10b6882429/original.js?1wJZZrG1u_pHc5Se7h_Oe0aG2wW-3SsKSWKYkfwI8-m8DhEVo6t7ci6LC7lULsmK4NG-of8uA8vvl133yegUou_XLk_GFDhDxCUh1bdT63rQ7lTvYhIDRNv2-_XfTWsK-c5buDEYVwvRv8sF9XzjB7qwaMxh3LxeglIKVL_Ugg","method":"GET","port":443,"downloadSize":1493,"headers":{"accept-ranges":"bytes","access-control-allow-origin":"*","age":"766132","cache-control":"max-age=31536000","content-disposition":"attachment","content-type":"text/javascript","date":"Fri, 05 Jun 2020 13:54:32 GMT","etag":"\"08fc031d23af8de14775fcc3b9d951a4\"","expires":"Sat, 05 Jun 2021 13:54:32 GMT","last-modified":"Sat, 14 Sep 2019 20:18:05 GMT","server":"ECAcc (dcb/7EBE)","x-amz-id-2":"5mZtNSSqOzS1w8xIF+z3rF1rOTnKKJZvfBI/Qx/H2XdhVaVtiGpn+HnbFFF/KC48o3eYAwtDFIs=","x-amz-meta-qqfilename":"App.js","x-amz-replication-status":"COMPLETED","x-amz-request-id":"C651684B3A30F577","x-amz-version-id":"GwMnajonLMtKoADV1c8MaWwg_wy22heM","x-cache":"HIT","content-length":"1493","connection":"close"}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            