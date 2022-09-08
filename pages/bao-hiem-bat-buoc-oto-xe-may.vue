<template>
    <main>
      <TieuDe bg="/images/xe-may.jpg" title="Bảo hiểm bắt buộc ô tô, xe máy: quyền lợi vượt trội phí mua" desc="Chỉ với 66.000 đồng/năm (xe trên 50cc), chủ xe máy đã có thể an tâm về khoản bảo hiểm trách nhiệm dân sự (TNDS) với quyền lợi bảo vệ tài chính rất cao để bồi thường cho nạn nhân nếu chẳng may gây ra tai nạn." />
      <BaoHiemXeMay />
      <AnSinhBuuDien />
      <SanPham />
      <ThongBao />
      <GuiYeuCau />
    </main>
</template>
<script>
export default {
  head: {
    title: 'Bảo hiểm ô tô, xe máy PTI - Hồ Thị Thắm',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Mua Bảo Hiểm ô tô, xe máy ở Bưu điện văn hóa xã Tự Lập tiết kiệm lên đến 50% đối với BH Xe Máy PTI và 20% với bảo hiểm bắt buộc xe ô tô PIT.'
      },
      {
            hid: 'og:title',
            property: 'og:title',
            content: 'Bảo Hiểm ô tô, xe máy PIT | Hồ Thị Thắm'
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: 'Mua Bảo Hiểm ô tô, xe máy ở Bưu điện văn hóa xã Tự Lập tiết kiệm lên đến 50% đối với BH Xe Máy PTI và 20% với bảo hiểm bắt buộc xe ô tô PIT.'
          },
          {
            hid: 'og:type',
            property: 'og:type',
            content: 'article',
          },
          {
            hid: 'og:site_name',
            property: 'og:type',
            content: 'Hồ Thị Thắm',
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: 'https://www.hotham.vn/images/ho-thi-tham-o-buu-dien-xa-tu-lap.jpg'
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: 'https://www.hotham.vn/bao-hiem-bat-buoc-oto-xe-may/'
          },
          {
            property: 'og:locale',
            content: 'vi_VN'
          }
    ],
    link: [
          {
            hid: 'canonical',
            rel: 'canonical',
            href: 'https://www.hotham.vn/bao-hiem-bat-buoc-oto-xe-may/'
          }
    ]
  }
}
</script>