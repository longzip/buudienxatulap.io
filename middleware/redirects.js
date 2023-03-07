export default function (req, res, next) {
  const redirects = [
    {
      from: '/tra-thoi-han-bao-hiem-y-te',
      to: 'https://blog.hotham.vn/nhung-cach-theo-doi-qua-trinh-tham-gia-va-gia-tri-su-dung-the-bhyt-nham-dam-bao-quyen-loi-lien-tuc/',
    },
  ]
  const redirect = redirects.find((r) => r.from === req.url)
  if (redirect) {
    res.writeHead(301, { Location: redirect.to })
    res.end()
  } else {
    next()
  }
}
