import md5 from 'md5'

function triggerDownload(imgURI: any, settings: any) {
  var evt = new MouseEvent('click', {
    view: window,
    bubbles: false,
    cancelable: true,
  })

  var a = document.createElement('a')
  const name = md5(JSON.stringify(settings))
  a.setAttribute('download', name + '.png')
  a.setAttribute('href', imgURI)
  a.setAttribute('target', '_blank')

  a.dispatchEvent(evt)
}

export const saveAsPng = (settings: any) => {
  const svg = document.getElementById('myAvatar')
  const canvas = document.getElementById('myCanvas')
  if (canvas && svg) {
    // @ts-ignore
    const ctx = canvas.getContext('2d')
    const data = new XMLSerializer().serializeToString(svg)
    // @ts-ignore
    const DOMURL = window.URL || window.webkitURL || window

    const img = new Image()
    const svgBlob = new Blob([data], { type: 'image/svg+xml;charset=utf-8' })
    const url = DOMURL.createObjectURL(svgBlob)

    img.onload = function() {
      if (canvas) {
        ctx.drawImage(img, 8, 0)
        DOMURL.revokeObjectURL(url)
        // @ts-ignore
        const imgURI = canvas.toDataURL('image/png')
        //.replace('image/png', 'image/octet-stream');
        console.log('SEND PNG TO SERVER: ', imgURI)
        triggerDownload(imgURI, settings)
      }
    }

    img.src = url
  }
}

export const isLight = (color:any):boolean => {
  var r, g, b, hsp;
  if (color.match(/^rgb/)) {
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    color = +("0x" + color.slice(1).replace(
      color.length < 5 && /./g, '$&$&'));
    r = color >> 16;
    g = color >> 8 & 255;
    b = color & 255;
  }
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))
  return hsp > 127.5;
}