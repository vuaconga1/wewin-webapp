# Danh mục từ vựng WeWin (theo database)

> Tạo lúc: 2026-06-18 09:17:26
> Nguồn: PostgreSQL `wewin` — bảng Levels, Weeks, Units, GameItems, MediaAssets

## Tổng quan

| Chỉ số | Giá trị |
| --- | --- |
| Số cấp độ (Level) | 4 |
| Số tuần (Week) | 2 |
| Số Unit active | 27 |
| Tổng GameItems | 2292 |
| Media audio trong DB | 587 |
| File mp3 local (`frontend/public/assets/audios`) | 623 |
| **Từ thiếu audio (unique)** | **0** |

## Cấp độ (Level)

- **pre11** — Pre 1.1: 2 tuổi
- **pre12** — Pre 1.2: 3 tuổi
- **pre2** — Pre 2: 4-5 tuổi
- **pre3** — Pre 3: 6 tuổi

## Tuần (Week)

- **Tuần 1** — Tuần 1
- **Tuần 2** — Tuần 2

---

## Cấp bậc game: Kindergarten

### UNIT 1. AROUND THE WORLD AND MY COUNTRY (`around-the-world-and-my-country`)

- Unit order: 1
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | America | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\america.mp3 |
| 2 | Australia | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\australia.mp3 |
| 3 | Canada | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\canada.mp3 |
| 4 | China | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\china.mp3 |
| 5 | England | Anh | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\england.mp3 |
| 6 | Japan | Nhật Bản | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\japan.mp3 |
| 7 | Korea | Hàn Quốc | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\korea.mp3 |
| 8 | park | 1 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\park.mp3 |
| 9 | Russia | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\russia.mp3 |
| 10 | shop | 1 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shop.mp3 |
| 11 | Vietnam | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\vietnam.mp3 |
| 12 | zoo | 1 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\zoo.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | airport | 2 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\airport.mp3 |
| 2 | America | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\america.mp3 |
| 3 | Australia | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\australia.mp3 |
| 4 | Canada | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\canada.mp3 |
| 5 | China | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\china.mp3 |
| 6 | cinema | 2 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cinema.mp3 |
| 7 | England | Anh | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\england.mp3 |
| 8 | France | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\france.mp3 |
| 9 | hospital | 2 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hospital.mp3 |
| 10 | hotel | 2 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hotel.mp3 |
| 11 | India | Ấn Độ | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\india.mp3 |
| 12 | Italy | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\italy.mp3 |
| 13 | Japan | Nhật Bản | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\japan.mp3 |
| 14 | Korea | Hàn Quốc | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\korea.mp3 |
| 15 | museum | 2 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\museum.mp3 |
| 16 | restaurant | 2 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\restaurant.mp3 |
| 17 | Russia | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\russia.mp3 |
| 18 | station | 2 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\station.mp3 |
| 19 | sunny | nắng | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sunny.mp3 |
| 20 | supermarket | 2 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\supermarket.mp3 |
| 21 | Vietnam | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\vietnam.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | America | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\america.mp3 |
| 2 | Australia | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\australia.mp3 |
| 3 | bakery | 3 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bakery.mp3 |
| 4 | bank | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bank.mp3 |
| 5 | Brazil | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\brazil.mp3 |
| 6 | Cambodia | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\cambodia.mp3 |
| 7 | Canada | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\canada.mp3 |
| 8 | China | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\china.mp3 |
| 9 | England | Anh | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\england.mp3 |
| 10 | France | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\france.mp3 |
| 11 | India | Ấn Độ | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\india.mp3 |
| 12 | Indonesia | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\indonesia.mp3 |
| 13 | Italy | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\italy.mp3 |
| 14 | Japan | Nhật Bản | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\japan.mp3 |
| 15 | Korea | Hàn Quốc | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\korea.mp3 |
| 16 | library | 3 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\library.mp3 |
| 17 | market | 3 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\market.mp3 |
| 18 | office | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\office.mp3 |
| 19 | play ground | sân chơi | pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\play ground.mp3 |
| 20 | playground | 3 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\play ground.mp3 |
| 21 | police station | 3 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\police station.mp3 |
| 22 | post office | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\post office.mp3 |
| 23 | Russia | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\russia.mp3 |
| 24 | sunny | nắng | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sunny.mp3 |
| 25 | Vietnam | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\vietnam.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | America | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\america.mp3 |
| 2 | Australia | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\australia.mp3 |
| 3 | bank | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bank.mp3 |
| 4 | bookstore | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bookstore.mp3 |
| 5 | Brazil | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\brazil.mp3 |
| 6 | bus stop | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bus stop.mp3 |
| 7 | Cambodia | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\cambodia.mp3 |
| 8 | Canada | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\canada.mp3 |
| 9 | China | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\china.mp3 |
| 10 | England | Anh | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\england.mp3 |
| 11 | fire station | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\fire station.mp3 |
| 12 | France | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\france.mp3 |
| 13 | Germany | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\germany.mp3 |
| 14 | India | Ấn Độ | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\india.mp3 |
| 15 | Indonesia | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\indonesia.mp3 |
| 16 | Italy | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\italy.mp3 |
| 17 | Japan | Nhật Bản | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\japan.mp3 |
| 18 | Korea | Hàn Quốc | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\korea.mp3 |
| 19 | Mexico | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mexico.mp3 |
| 20 | office | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\office.mp3 |
| 21 | pharmacy | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\pharmacy.mp3 |
| 22 | post office | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\post office.mp3 |
| 23 | Russia | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\russia.mp3 |
| 24 | scarf | 4 | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\scarf.mp3 |
| 25 | shopping mall | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shopping mall.mp3 |
| 26 | Singapore | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\singapore.mp3 |
| 27 | Spain | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\spain.mp3 |
| 28 | sunny | nắng | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sunny.mp3 |
| 29 | Vietnam | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\vietnam.mp3 |

### UNIT 2. THE SEASONS (`the-seasons`)

- Unit order: 2
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | car | xe hơi | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\car.mp3 |
| 2 | coat | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\coat.mp3 |
| 3 | dress | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dress.mp3 |
| 4 | pants | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\pants.mp3 |
| 5 | shirt | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shirt.mp3 |
| 6 | shoes | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shoes.mp3 |
| 7 | socks | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\socks.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | boots | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\boots.mp3 |
| 2 | car | xe hơi | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\car.mp3 |
| 3 | cloudy | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\cloudy.mp3 |
| 4 | coat | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\coat.mp3 |
| 5 | dress | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dress.mp3 |
| 6 | dry | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\dry.mp3 |
| 7 | firefighter | lính cứu hỏa | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\firefighter.mp3 |
| 8 | jacket | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\jacket.mp3 |
| 9 | pants | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\pants.mp3 |
| 10 | rainy | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\rainy.mp3 |
| 11 | shirt | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shirt.mp3 |
| 12 | shoes | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shoes.mp3 |
| 13 | shorts | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shorts.mp3 |
| 14 | skirt | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\skirt.mp3 |
| 15 | socks | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\socks.mp3 |
| 16 | stormy | bão | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\stormy.mp3 |
| 17 | sunny | 2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\sunny.mp3 |
| 18 | sweater | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sweater.mp3 |
| 19 | t-shirt | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\t-shirt.mp3 |
| 20 | warm | ấm | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\warm.mp3 |
| 21 | windy | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\windy.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | boots | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\boots.mp3 |
| 2 | car | xe hơi | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\car.mp3 |
| 3 | cloudy | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\cloudy.mp3 |
| 4 | coat | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\coat.mp3 |
| 5 | dress | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dress.mp3 |
| 6 | dry | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\dry.mp3 |
| 7 | fall | mùa thu | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\fall.mp3 |
| 8 | firefighter | lính cứu hỏa | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\firefighter.mp3 |
| 9 | jacket | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\jacket.mp3 |
| 10 | pants | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\pants.mp3 |
| 11 | put on | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\put on.mp3 |
| 12 | rainy | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\rainy.mp3 |
| 13 | shirt | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shirt.mp3 |
| 14 | shoes | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shoes.mp3 |
| 15 | shorts | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shorts.mp3 |
| 16 | skirt | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\skirt.mp3 |
| 17 | socks | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\socks.mp3 |
| 18 | spring | mùa xuân | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\spring.mp3 |
| 19 | stormy | bão | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\stormy.mp3 |
| 20 | summer | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\summer.mp3 |
| 21 | summer clothes | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\summer clothes.mp3 |
| 22 | sunny | 2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\sunny.mp3 |
| 23 | sweater | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sweater.mp3 |
| 24 | t-shirt | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\t-shirt.mp3 |
| 25 | take off | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\take off.mp3 |
| 26 | thunder | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\thunder.mp3 |
| 27 | warm | ấm | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\warm.mp3 |
| 28 | windy | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\windy.mp3 |
| 29 | winter | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\winter.mp3 |
| 30 | winter clothes | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\winter clothes.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | boots | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\boots.mp3 |
| 2 | car | xe hơi | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\car.mp3 |
| 3 | cloudy | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\cloudy.mp3 |
| 4 | coat | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\coat.mp3 |
| 5 | cold | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\cold.mp3 |
| 6 | dress | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dress.mp3 |
| 7 | dry | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\dry.mp3 |
| 8 | fall | mùa thu | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\fall.mp3 |
| 9 | firefighter | lính cứu hỏa | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\firefighter.mp3 |
| 10 | gloves | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\gloves.mp3 |
| 11 | hot | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\hot.mp3 |
| 12 | jacket | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\jacket.mp3 |
| 13 | lightning | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lightning.mp3 |
| 14 | pants | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\pants.mp3 |
| 15 | put on | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\put on.mp3 |
| 16 | rainbow | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\rainbow.mp3 |
| 17 | raincoat | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\raincoat.mp3 |
| 18 | rainy | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\rainy.mp3 |
| 19 | scarf | 4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\scarf.mp3 |
| 20 | shirt | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shirt.mp3 |
| 21 | shoes | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shoes.mp3 |
| 22 | shorts | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shorts.mp3 |
| 23 | skirt | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\skirt.mp3 |
| 24 | snowy | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\snowy.mp3 |
| 25 | socks | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\socks.mp3 |
| 26 | spring | mùa xuân | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\spring.mp3 |
| 27 | stormy | bão | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\stormy.mp3 |
| 28 | summer | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\summer.mp3 |
| 29 | summer clothes | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\summer clothes.mp3 |
| 30 | sunny | 2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\sunny.mp3 |
| 31 | sweater | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sweater.mp3 |
| 32 | t-shirt | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\t-shirt.mp3 |
| 33 | take off | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\take off.mp3 |
| 34 | thunder | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\thunder.mp3 |
| 35 | uniform | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\uniform.mp3 |
| 36 | warm | ấm | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\warm.mp3 |
| 37 | windy | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\windy.mp3 |
| 38 | winter | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\winter.mp3 |
| 39 | winter clothes | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\winter clothes.mp3 |

### UNIT 3. TRANSPORT & JOB (`transport-&-job`)

- Unit order: 3
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bike | xe đạp | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bike.mp3 |
| 2 | boat | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\boat.mp3 |
| 3 | bus | xe buýt | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bus.mp3 |
| 4 | car | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\car.mp3 |
| 5 | cook | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cook.mp3 |
| 6 | doctor | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\doctor.mp3 |
| 7 | glass | thủy tinh | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\glass.mp3 |
| 8 | nurse | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\nurse.mp3 |
| 9 | plane | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\plane.mp3 |
| 10 | police | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\police.mp3 |
| 11 | sun | mặt trời | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sun.mp3 |
| 12 | teacher | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\teacher.mp3 |
| 13 | train | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\train.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | artist | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\artist.mp3 |
| 2 | bike | xe đạp | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bike.mp3 |
| 3 | boat | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\boat.mp3 |
| 4 | bus | xe buýt | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bus.mp3 |
| 5 | car | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\car.mp3 |
| 6 | cook | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cook.mp3 |
| 7 | doctor | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\doctor.mp3 |
| 8 | firefighter | 2,3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\firefighter.mp3 |
| 9 | glass | thủy tinh | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\glass.mp3 |
| 10 | helicopter | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\helicopter.mp3 |
| 11 | motorbike | xe máy | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\motorbike.mp3 |
| 12 | nurse | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\nurse.mp3 |
| 13 | pilot | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\pilot.mp3 |
| 14 | plane | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\plane.mp3 |
| 15 | police | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\police.mp3 |
| 16 | ship | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ship.mp3 |
| 17 | singer | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\singer.mp3 |
| 18 | subway | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\subway.mp3 |
| 19 | sun | mặt trời | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sun.mp3 |
| 20 | teacher | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\teacher.mp3 |
| 21 | train | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\train.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | artist | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\artist.mp3 |
| 2 | astronaut | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\astronaut.mp3 |
| 3 | bike | xe đạp | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bike.mp3 |
| 4 | boat | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\boat.mp3 |
| 5 | bus | xe buýt | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bus.mp3 |
| 6 | car | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\car.mp3 |
| 7 | cook | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cook.mp3 |
| 8 | doctor | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\doctor.mp3 |
| 9 | firefighter | 2,3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\firefighter.mp3 |
| 10 | glass | thủy tinh | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\glass.mp3 |
| 11 | helicopter | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\helicopter.mp3 |
| 12 | motorbike | xe máy | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\motorbike.mp3 |
| 13 | nurse | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\nurse.mp3 |
| 14 | pilot | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\pilot.mp3 |
| 15 | plane | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\plane.mp3 |
| 16 | police | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\police.mp3 |
| 17 | scientist | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\scientist.mp3 |
| 18 | ship | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ship.mp3 |
| 19 | singer | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\singer.mp3 |
| 20 | submarine | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\submarine.mp3 |
| 21 | subway | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\subway.mp3 |
| 22 | sun | mặt trời | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sun.mp3 |
| 23 | teacher | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\teacher.mp3 |
| 24 | train | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\train.mp3 |
| 25 | truck | 3 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\truck.mp3 |
| 26 | vet | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\vet.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | artist | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\artist.mp3 |
| 2 | astronaut | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\astronaut.mp3 |
| 3 | bike | xe đạp | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bike.mp3 |
| 4 | boat | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\boat.mp3 |
| 5 | bus | xe buýt | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bus.mp3 |
| 6 | car | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\car.mp3 |
| 7 | cook | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cook.mp3 |
| 8 | doctor | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\doctor.mp3 |
| 9 | drive | lái xe | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\drive.mp3 |
| 10 | fast | nhanh | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\fast.mp3 |
| 11 | firefighter | 2,3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\firefighter.mp3 |
| 12 | fly | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\fly.mp3 |
| 13 | glass | thủy tinh | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\glass.mp3 |
| 14 | helicopter | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\helicopter.mp3 |
| 15 | motorbike | xe máy | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\motorbike.mp3 |
| 16 | nurse | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\nurse.mp3 |
| 17 | pilot | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\pilot.mp3 |
| 18 | plane | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\plane.mp3 |
| 19 | police | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\police.mp3 |
| 20 | ride | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ride.mp3 |
| 21 | sail | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sail.mp3 |
| 22 | scientist | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\scientist.mp3 |
| 23 | ship | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ship.mp3 |
| 24 | singer | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\singer.mp3 |
| 25 | slow | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\slow.mp3 |
| 26 | submarine | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\submarine.mp3 |
| 27 | subway | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\subway.mp3 |
| 28 | sun | mặt trời | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sun.mp3 |
| 29 | teacher | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\teacher.mp3 |
| 30 | train | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\train.mp3 |
| 31 | vet | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\vet.mp3 |

### UNIT 4. THE EARTH (`the-earth`)

- Unit order: 4
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | earth | Trái Đất | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\earth.mp3 |
| 2 | glass | 1,2,3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\glass.mp3 |
| 3 | land | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\land.mp3 |
| 4 | metal | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\metal.mp3 |
| 5 | moon | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\moon.mp3 |
| 6 | paper | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\paper.mp3 |
| 7 | pig | heo | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pig.mp3 |
| 8 | sky | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sky.mp3 |
| 9 | sun | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\sun.mp3 |
| 10 | venus | sao Kim | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\venus.mp3 |
| 11 | water | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\water.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | earth | Trái Đất | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\earth.mp3 |
| 2 | glass | 1,2,3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\glass.mp3 |
| 3 | land | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\land.mp3 |
| 4 | mars | sao Hỏa | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mars.mp3 |
| 5 | mercury | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mercury.mp3 |
| 6 | metal | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\metal.mp3 |
| 7 | moon | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\moon.mp3 |
| 8 | paper | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\paper.mp3 |
| 9 | pig | heo | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pig.mp3 |
| 10 | plastic | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\plastic.mp3 |
| 11 | sky | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sky.mp3 |
| 12 | sun | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\sun.mp3 |
| 13 | trash | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\trash.mp3 |
| 14 | venus | sao Kim | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\venus.mp3 |
| 15 | water | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\water.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | earth | Trái Đất | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\earth.mp3 |
| 2 | glass | 1,2,3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\glass.mp3 |
| 3 | jupiter | sao Mộc | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\jupiter.mp3 |
| 4 | land | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\land.mp3 |
| 5 | mars | sao Hỏa | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mars.mp3 |
| 6 | mercury | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mercury.mp3 |
| 7 | metal | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\metal.mp3 |
| 8 | moon | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\moon.mp3 |
| 9 | ocean | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ocean.mp3 |
| 10 | paper | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\paper.mp3 |
| 11 | pig | heo | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pig.mp3 |
| 12 | plastic | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\plastic.mp3 |
| 13 | saturn | sao Thổ | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\saturn.mp3 |
| 14 | sky | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sky.mp3 |
| 15 | sun | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\sun.mp3 |
| 16 | trash | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\trash.mp3 |
| 17 | venus | sao Kim | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\venus.mp3 |
| 18 | water | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\water.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bin | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bin.mp3 |
| 2 | can | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\can.mp3 |
| 3 | earth | Trái Đất | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\earth.mp3 |
| 4 | glass | 1,2,3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\glass.mp3 |
| 5 | jupiter | sao Mộc | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\jupiter.mp3 |
| 6 | land | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\land.mp3 |
| 7 | mars | sao Hỏa | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mars.mp3 |
| 8 | mercury | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mercury.mp3 |
| 9 | metal | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\metal.mp3 |
| 10 | moon | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\moon.mp3 |
| 11 | neptune | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\neptune.mp3 |
| 12 | ocean | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ocean.mp3 |
| 13 | paper | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\paper.mp3 |
| 14 | pig | heo | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pig.mp3 |
| 15 | plastic | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\plastic.mp3 |
| 16 | recycle | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\recycle.mp3 |
| 17 | saturn | sao Thổ | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\saturn.mp3 |
| 18 | sky | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sky.mp3 |
| 19 | squirrel | sóc | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\squirrel.mp3 |
| 20 | sun | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\sun.mp3 |
| 21 | trash | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\trash.mp3 |
| 22 | uranus | sao Thiên Vương | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\uranus.mp3 |
| 23 | venus | sao Kim | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\venus.mp3 |
| 24 | water | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\water.mp3 |

### UNIT 5. ANIMALS (`animals`)

- Unit order: 5
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bear | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bear.mp3 |
| 2 | cow | bò | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\cow.mp3 |
| 3 | duck | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\duck.mp3 |
| 4 | giraffe | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\giraffe.mp3 |
| 5 | hippo | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hippo.mp3 |
| 6 | horse | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\horse.mp3 |
| 7 | lion | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\lion.mp3 |
| 8 | monkey | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\monkey.mp3 |
| 9 | panda | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\panda.mp3 |
| 10 | pig | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\pig.mp3 |
| 11 | rabbit | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\rabbit.mp3 |
| 12 | rooster | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\rooster.mp3 |
| 13 | roots | rễ | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\roots.mp3 |
| 14 | sheep | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sheep.mp3 |
| 15 | snake | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\snake.mp3 |
| 16 | tiger | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\tiger.mp3 |
| 17 | zebra | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\zebra.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bear | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bear.mp3 |
| 2 | cow | bò | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\cow.mp3 |
| 3 | duck | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\duck.mp3 |
| 4 | farmer | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\farmer.mp3 |
| 5 | fox | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\fox.mp3 |
| 6 | giraffe | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\giraffe.mp3 |
| 7 | hippo | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hippo.mp3 |
| 8 | horse | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\horse.mp3 |
| 9 | koala | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\koala.mp3 |
| 10 | lion | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\lion.mp3 |
| 11 | monkey | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\monkey.mp3 |
| 12 | panda | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\panda.mp3 |
| 13 | pig | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\pig.mp3 |
| 14 | rabbit | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\rabbit.mp3 |
| 15 | rooster | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\rooster.mp3 |
| 16 | roots | rễ | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\roots.mp3 |
| 17 | sheep | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sheep.mp3 |
| 18 | snake | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\snake.mp3 |
| 19 | tiger | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\tiger.mp3 |
| 20 | turkey | gà tây | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\turkey.mp3 |
| 21 | zebra | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\zebra.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bear | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bear.mp3 |
| 2 | buffalo | trâu | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\buffalo.mp3 |
| 3 | bull | bò đực | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bull.mp3 |
| 4 | calf | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\calf.mp3 |
| 5 | chick | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\chick.mp3 |
| 6 | chicken | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\chicken.mp3 |
| 7 | cow | bò | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\cow.mp3 |
| 8 | donkey | lừa | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\donkey.mp3 |
| 9 | duck | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\duck.mp3 |
| 10 | farmer | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\farmer.mp3 |
| 11 | fox | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\fox.mp3 |
| 12 | giraffe | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\giraffe.mp3 |
| 13 | goat | dê | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\goat.mp3 |
| 14 | goose | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\goose.mp3 |
| 15 | hippo | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hippo.mp3 |
| 16 | horse | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\horse.mp3 |
| 17 | kangaroo | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\kangaroo.mp3 |
| 18 | koala | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\koala.mp3 |
| 19 | lamb | cừu non | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lamb.mp3 |
| 20 | lion | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\lion.mp3 |
| 21 | lizard | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\lizard.mp3 |
| 22 | monkey | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\monkey.mp3 |
| 23 | panda | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\panda.mp3 |
| 24 | pig | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\pig.mp3 |
| 25 | piglet | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\piglet.mp3 |
| 26 | pony | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pony.mp3 |
| 27 | rabbit | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\rabbit.mp3 |
| 28 | rooster | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\rooster.mp3 |
| 29 | roots | rễ | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\roots.mp3 |
| 30 | sheep | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sheep.mp3 |
| 31 | snake | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\snake.mp3 |
| 32 | tiger | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\tiger.mp3 |
| 33 | turkey | gà tây | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\turkey.mp3 |
| 34 | wolf | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\wolf.mp3 |
| 35 | zebra | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\zebra.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bear | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bear.mp3 |
| 2 | buffalo | trâu | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\buffalo.mp3 |
| 3 | bull | bò đực | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bull.mp3 |
| 4 | calf | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\calf.mp3 |
| 5 | camel | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\camel.mp3 |
| 6 | celery | 4 | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\celery.mp3 |
| 7 | chick | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\chick.mp3 |
| 8 | chicken | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\chicken.mp3 |
| 9 | cow | bò | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\cow.mp3 |
| 10 | donkey | lừa | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\donkey.mp3 |
| 11 | duck | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\duck.mp3 |
| 12 | farmer | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\farmer.mp3 |
| 13 | fox | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\fox.mp3 |
| 14 | giraffe | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\giraffe.mp3 |
| 15 | goat | dê | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\goat.mp3 |
| 16 | goose | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\goose.mp3 |
| 17 | gorilla | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\gorilla.mp3 |
| 18 | hippo | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hippo.mp3 |
| 19 | horse | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\horse.mp3 |
| 20 | kangaroo | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\kangaroo.mp3 |
| 21 | koala | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\koala.mp3 |
| 22 | lamb | cừu non | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lamb.mp3 |
| 23 | lion | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\lion.mp3 |
| 24 | lizard | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\lizard.mp3 |
| 25 | monkey | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\monkey.mp3 |
| 26 | panda | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\panda.mp3 |
| 27 | pig | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\pig.mp3 |
| 28 | piglet | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\piglet.mp3 |
| 29 | polar bear | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\polar bear.mp3 |
| 30 | pony | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pony.mp3 |
| 31 | rabbit | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\rabbit.mp3 |
| 32 | raccoon | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\raccoon.mp3 |
| 33 | rhino | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\rhino.mp3 |
| 34 | rooster | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\rooster.mp3 |
| 35 | roots | rễ | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\roots.mp3 |
| 36 | sheep | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sheep.mp3 |
| 37 | snake | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\snake.mp3 |
| 38 | squirrel | 4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\squirrel.mp3 |
| 39 | tiger | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\tiger.mp3 |
| 40 | turkey | gà tây | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\turkey.mp3 |
| 41 | wolf | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\wolf.mp3 |
| 42 | zebra | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\zebra.mp3 |

### UNIT 6. PLANT & VEGETABLE (`plant-&-vegetable`)

- Unit order: 6
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | beach | bãi biển | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\beach.mp3 |
| 2 | bean | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bean.mp3 |
| 3 | cabbage | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cabbage.mp3 |
| 4 | carrot | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\carrot.mp3 |
| 5 | corn | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\corn.mp3 |
| 6 | daisy | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\daisy.mp3 |
| 7 | flower | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\flower.mp3 |
| 8 | leaves | lá | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\leaves.mp3 |
| 9 | mushroom | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\mushroom.mp3 |
| 10 | potato | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\potato.mp3 |
| 11 | roots | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\roots.mp3 |
| 12 | rose | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\rose.mp3 |
| 13 | stem | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\stem.mp3 |
| 14 | sunflower | hoa hướng dương | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sunflower.mp3 |
| 15 | tomato | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\tomato.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | beach | bãi biển | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\beach.mp3 |
| 2 | bean | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bean.mp3 |
| 3 | broccoli | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\broccoli.mp3 |
| 4 | cabbage | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cabbage.mp3 |
| 5 | carrot | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\carrot.mp3 |
| 6 | corn | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\corn.mp3 |
| 7 | daisy | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\daisy.mp3 |
| 8 | eggplant | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\eggplant.mp3 |
| 9 | flower | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\flower.mp3 |
| 10 | leaves | lá | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\leaves.mp3 |
| 11 | lily | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lily.mp3 |
| 12 | lotus | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lotus.mp3 |
| 13 | mushroom | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\mushroom.mp3 |
| 14 | onion | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\onion.mp3 |
| 15 | potato | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\potato.mp3 |
| 16 | roots | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\roots.mp3 |
| 17 | rose | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\rose.mp3 |
| 18 | stem | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\stem.mp3 |
| 19 | sunflower | hoa hướng dương | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sunflower.mp3 |
| 20 | tomato | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\tomato.mp3 |
| 21 | tulip | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\tulip.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | beach | bãi biển | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\beach.mp3 |
| 2 | bean | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bean.mp3 |
| 3 | bell pepper | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bell pepper.mp3 |
| 4 | broccoli | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\broccoli.mp3 |
| 5 | cabbage | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cabbage.mp3 |
| 6 | carrot | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\carrot.mp3 |
| 7 | corn | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\corn.mp3 |
| 8 | daisy | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\daisy.mp3 |
| 9 | eggplant | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\eggplant.mp3 |
| 10 | flower | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\flower.mp3 |
| 11 | garlic | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\garlic.mp3 |
| 12 | ginger | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ginger.mp3 |
| 13 | lavender | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lavender.mp3 |
| 14 | leaves | lá | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\leaves.mp3 |
| 15 | lily | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lily.mp3 |
| 16 | lotus | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lotus.mp3 |
| 17 | marigold | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\marigold.mp3 |
| 18 | mushroom | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\mushroom.mp3 |
| 19 | onion | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\onion.mp3 |
| 20 | orchid | hoa lan | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\orchid.mp3 |
| 21 | potato | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\potato.mp3 |
| 22 | roots | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\roots.mp3 |
| 23 | rose | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\rose.mp3 |
| 24 | stem | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\stem.mp3 |
| 25 | sunflower | hoa hướng dương | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sunflower.mp3 |
| 26 | tomato | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\tomato.mp3 |
| 27 | tulip | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\tulip.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | beach | bãi biển | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\beach.mp3 |
| 2 | bean | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bean.mp3 |
| 3 | beetroot | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\beetroot.mp3 |
| 4 | bell pepper | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bell pepper.mp3 |
| 5 | bougainvillea | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bougainvillea.mp3 |
| 6 | broccoli | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\broccoli.mp3 |
| 7 | cabbage | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cabbage.mp3 |
| 8 | carrot | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\carrot.mp3 |
| 9 | celery | 4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\celery.mp3 |
| 10 | corn | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\corn.mp3 |
| 11 | daisy | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\daisy.mp3 |
| 12 | eggplant | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\eggplant.mp3 |
| 13 | flower | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\flower.mp3 |
| 14 | garlic | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\garlic.mp3 |
| 15 | ginger | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ginger.mp3 |
| 16 | green onion | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\green onion.mp3 |
| 17 | kayaking | 4 | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\kayaking.mp3 |
| 18 | lavender | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lavender.mp3 |
| 19 | leaves | lá | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\leaves.mp3 |
| 20 | lettuce | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\lettuce.mp3 |
| 21 | lily | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lily.mp3 |
| 22 | lotus | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lotus.mp3 |
| 23 | marigold | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\marigold.mp3 |
| 24 | mushroom | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\mushroom.mp3 |
| 25 | onion | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\onion.mp3 |
| 26 | orchid | hoa lan | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\orchid.mp3 |
| 27 | peony | hoa mẫu đơn | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\peony.mp3 |
| 28 | plumeria | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\plumeria.mp3 |
| 29 | potato | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\potato.mp3 |
| 30 | roots | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\roots.mp3 |
| 31 | rose | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\rose.mp3 |
| 32 | stem | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\stem.mp3 |
| 33 | sunflower | hoa hướng dương | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sunflower.mp3 |
| 34 | tomato | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\tomato.mp3 |
| 35 | tulip | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\tulip.mp3 |

### UNIT 7. HAPPY SUMMER (`happy-summer`)

- Unit order: 7
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | beach | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\beach.mp3 |
| 2 | coconut | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\coconut.mp3 |
| 3 | coral | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\coral.mp3 |
| 4 | octopus | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\octopus.mp3 |
| 5 | owl | cú | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\owl.mp3 |
| 6 | sea-lion | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sea-lion.mp3 |
| 7 | shark | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shark.mp3 |
| 8 | shrimp | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shrimp.mp3 |
| 9 | sunglasses | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sunglasses.mp3 |
| 10 | sunscreen | kem chống nắng | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sunscreen.mp3 |
| 11 | surfing | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\surfing.mp3 |
| 12 | wave | sóng | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\wave.mp3 |
| 13 | whale | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\whale.mp3 |
| 14 | windsurfing | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\windsurfing.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | beach | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\beach.mp3 |
| 2 | coconut | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\coconut.mp3 |
| 3 | coral | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\coral.mp3 |
| 4 | fishing | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\fishing.mp3 |
| 5 | octopus | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\octopus.mp3 |
| 6 | owl | cú | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\owl.mp3 |
| 7 | sea-lion | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sea-lion.mp3 |
| 8 | shark | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shark.mp3 |
| 9 | shrimp | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shrimp.mp3 |
| 10 | sunglasses | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sunglasses.mp3 |
| 11 | sunscreen | kem chống nắng | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sunscreen.mp3 |
| 12 | surfing | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\surfing.mp3 |
| 13 | wave | sóng | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\wave.mp3 |
| 14 | whale | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\whale.mp3 |
| 15 | windsurfing | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\windsurfing.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | beach | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\beach.mp3 |
| 2 | beach ball | bóng biển | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\beach ball.mp3 |
| 3 | castle | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\castle.mp3 |
| 4 | coconut | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\coconut.mp3 |
| 5 | coral | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\coral.mp3 |
| 6 | dolphin | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dolphin.mp3 |
| 7 | fishing | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\fishing.mp3 |
| 8 | hat | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\hat.mp3 |
| 9 | hula dance | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\hula dance.mp3 |
| 10 | jellyfish | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\jellyfish.mp3 |
| 11 | lobster | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\lobster.mp3 |
| 12 | octopus | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\octopus.mp3 |
| 13 | owl | cú | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\owl.mp3 |
| 14 | sand | cát | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sand.mp3 |
| 15 | sea horse | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sea horse.mp3 |
| 16 | sea-lion | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sea-lion.mp3 |
| 17 | shark | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shark.mp3 |
| 18 | shrimp | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shrimp.mp3 |
| 19 | snorkeling | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\snorkeling.mp3 |
| 20 | squid | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\squid.mp3 |
| 21 | stingray | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\stingray.mp3 |
| 22 | sunglasses | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sunglasses.mp3 |
| 23 | sunscreen | kem chống nắng | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sunscreen.mp3 |
| 24 | surfing | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\surfing.mp3 |
| 25 | swimsuit | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\swimsuit.mp3 |
| 26 | ukulele | đàn ukulele | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ukulele.mp3 |
| 27 | volleyball | bóng chuyền | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\volleyball.mp3 |
| 28 | wave | sóng | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\wave.mp3 |
| 29 | whale | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\whale.mp3 |
| 30 | windsurfing | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\windsurfing.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | beach | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\beach.mp3 |
| 2 | beach ball | bóng biển | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\beach ball.mp3 |
| 3 | castle | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\castle.mp3 |
| 4 | coconut | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\coconut.mp3 |
| 5 | coral | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\coral.mp3 |
| 6 | cupcake | bánh cupcake | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cupcake.mp3 |
| 7 | diving | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\diving.mp3 |
| 8 | dolphin | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dolphin.mp3 |
| 9 | fishing | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\fishing.mp3 |
| 10 | hat | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\hat.mp3 |
| 11 | hula dance | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\hula dance.mp3 |
| 12 | island | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\island.mp3 |
| 13 | jellyfish | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\jellyfish.mp3 |
| 14 | jump | nhảy | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\jump.mp3 |
| 15 | kayaking | 4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\kayaking.mp3 |
| 16 | lobster | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\lobster.mp3 |
| 17 | octopus | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\octopus.mp3 |
| 18 | owl | cú | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\owl.mp3 |
| 19 | run | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\run.mp3 |
| 20 | sand | cát | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sand.mp3 |
| 21 | sea horse | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sea horse.mp3 |
| 22 | sea-lion | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sea-lion.mp3 |
| 23 | shark | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shark.mp3 |
| 24 | shell | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shell.mp3 |
| 25 | shrimp | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shrimp.mp3 |
| 26 | snorkeling | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\snorkeling.mp3 |
| 27 | squid | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\squid.mp3 |
| 28 | starfish | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\starfish.mp3 |
| 29 | stingray | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\stingray.mp3 |
| 30 | sunbathe | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sunbathe.mp3 |
| 31 | sunglasses | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sunglasses.mp3 |
| 32 | sunscreen | kem chống nắng | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sunscreen.mp3 |
| 33 | surfing | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\surfing.mp3 |
| 34 | swimsuit | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\swimsuit.mp3 |
| 35 | ukulele | đàn ukulele | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ukulele.mp3 |
| 36 | volleyball | bóng chuyền | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\volleyball.mp3 |
| 37 | wave | sóng | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\wave.mp3 |
| 38 | whale | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\whale.mp3 |
| 39 | windsurfing | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\windsurfing.mp3 |

### UNIT 8. EXPLORE YOUR SUROUNDINGS (`explore-your-suroudings`)

- Unit order: 8
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | apple | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\apple.mp3 |
| 2 | bee | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bee.mp3 |
| 3 | butterfly | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\butterfly.mp3 |
| 4 | caterpilla | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\caterpillar.mp3 |
| 5 | cocoon | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cocoon.mp3 |
| 6 | dad | bố | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\dad.mp3 |
| 7 | dove | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\dove.mp3 |
| 8 | eagle | đại bàng | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\eagle.mp3 |
| 9 | egg | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\egg.mp3 |
| 10 | fly | 1,2,3,4 | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\fly.mp3 |
| 11 | fly animal | 1,2,3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\fly animal.mp3 |
| 12 | happy | vui | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\happy.mp3 |
| 13 | labybug | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ladybug.mp3 |
| 14 | lake | hồ | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lake.mp3 |
| 15 | mountain | núi | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mountain.mp3 |
| 16 | orange | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\orange.mp3 |
| 17 | ostrich | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ostrich.mp3 |
| 18 | owl | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\owl.mp3 |
| 19 | river | sông | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\river.mp3 |
| 20 | spider | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\spider.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ant | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ant.mp3 |
| 2 | apple | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\apple.mp3 |
| 3 | bee | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bee.mp3 |
| 4 | butterfly | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\butterfly.mp3 |
| 5 | caterpilla | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\caterpillar.mp3 |
| 6 | cocoon | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cocoon.mp3 |
| 7 | dad | bố | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\dad.mp3 |
| 8 | dove | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\dove.mp3 |
| 9 | eagle | đại bàng | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\eagle.mp3 |
| 10 | egg | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\egg.mp3 |
| 11 | flamingo | chim hồng hạc | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\flamingo.mp3 |
| 12 | fly | 1,2,3,4 | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\fly.mp3 |
| 13 | fly animal | 1,2,3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\fly animal.mp3 |
| 14 | forest | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\forest.mp3 |
| 15 | happy | vui | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\happy.mp3 |
| 16 | labybug | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ladybug.mp3 |
| 17 | lake | hồ | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lake.mp3 |
| 18 | leaf | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\leaf.mp3 |
| 19 | mountain | núi | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mountain.mp3 |
| 20 | orange | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\orange.mp3 |
| 21 | ostrich | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ostrich.mp3 |
| 22 | owl | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\owl.mp3 |
| 23 | pear | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\pear.mp3 |
| 24 | penguin | chim cánh cụt | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\penguin.mp3 |
| 25 | plum | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\plum.mp3 |
| 26 | river | sông | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\river.mp3 |
| 27 | spider | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\spider.mp3 |
| 28 | strawberry | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\strawberry.mp3 |
| 29 | tree | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\tree.mp3 |
| 30 | waterfall | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\waterfall.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ant | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ant.mp3 |
| 2 | apple | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\apple.mp3 |
| 3 | bee | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bee.mp3 |
| 4 | butterfly | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\butterfly.mp3 |
| 5 | cake | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cake.mp3 |
| 6 | caterpilla | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\caterpillar.mp3 |
| 7 | cave | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\cave.mp3 |
| 8 | cocoon | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cocoon.mp3 |
| 9 | dad | bố | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\dad.mp3 |
| 10 | dove | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\dove.mp3 |
| 11 | dragonfly | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dragonfly.mp3 |
| 12 | eagle | đại bàng | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\eagle.mp3 |
| 13 | egg | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\egg.mp3 |
| 14 | flamingo | chim hồng hạc | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\flamingo.mp3 |
| 15 | fly | 1,2,3,4 | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\fly.mp3 |
| 16 | fly animal | 1,2,3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\fly animal.mp3 |
| 17 | forest | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\forest.mp3 |
| 18 | happy | vui | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\happy.mp3 |
| 19 | ice | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ice.mp3 |
| 20 | labybug | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ladybug.mp3 |
| 21 | lake | hồ | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lake.mp3 |
| 22 | leaf | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\leaf.mp3 |
| 23 | mosquito | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\mosquito.mp3 |
| 24 | mountain | núi | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mountain.mp3 |
| 25 | orange | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\orange.mp3 |
| 26 | ostrich | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ostrich.mp3 |
| 27 | owl | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\owl.mp3 |
| 28 | pear | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\pear.mp3 |
| 29 | penguin | chim cánh cụt | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\penguin.mp3 |
| 30 | plum | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\plum.mp3 |
| 31 | river | sông | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\river.mp3 |
| 32 | sausage | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sausage.mp3 |
| 33 | spider | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\spider.mp3 |
| 34 | strawberry | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\strawberry.mp3 |
| 35 | swan | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\swan.mp3 |
| 36 | tree | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\tree.mp3 |
| 37 | waterfall | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\waterfall.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ant | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ant.mp3 |
| 2 | apple | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\apple.mp3 |
| 3 | bee | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bee.mp3 |
| 4 | butterfly | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\butterfly.mp3 |
| 5 | cake | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cake.mp3 |
| 6 | caterpilla | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\caterpillar.mp3 |
| 7 | cave | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\cave.mp3 |
| 8 | cheese | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cheese.mp3 |
| 9 | cocoon | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cocoon.mp3 |
| 10 | cucumber | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cucumber.mp3 |
| 11 | cupcake | 4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\cupcake.mp3 |
| 12 | dad | bố | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\dad.mp3 |
| 13 | dove | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\dove.mp3 |
| 14 | dragonfly | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dragonfly.mp3 |
| 15 | eagle | đại bàng | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\eagle.mp3 |
| 16 | egg | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\egg.mp3 |
| 17 | flamingo | chim hồng hạc | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\flamingo.mp3 |
| 18 | fly | 1,2,3,4 | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\fly.mp3 |
| 19 | fly animal | 1,2,3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\fly animal.mp3 |
| 20 | forest | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\forest.mp3 |
| 21 | happy | vui | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\happy.mp3 |
| 22 | ice | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ice.mp3 |
| 23 | ice-cream | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ice-cream.mp3 |
| 24 | labybug | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ladybug.mp3 |
| 25 | lake | hồ | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lake.mp3 |
| 26 | leaf | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\leaf.mp3 |
| 27 | mosquito | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\mosquito.mp3 |
| 28 | mountain | núi | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mountain.mp3 |
| 29 | orange | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\orange.mp3 |
| 30 | ostrich | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ostrich.mp3 |
| 31 | owl | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\owl.mp3 |
| 32 | peacock | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\peacock.mp3 |
| 33 | pear | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\pear.mp3 |
| 34 | penguin | chim cánh cụt | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\penguin.mp3 |
| 35 | plum | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\plum.mp3 |
| 36 | river | sông | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\river.mp3 |
| 37 | salami | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\salami.mp3 |
| 38 | sausage | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sausage.mp3 |
| 39 | sparrow | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sparrow.mp3 |
| 40 | spider | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\spider.mp3 |
| 41 | strawberry | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\strawberry.mp3 |
| 42 | swan | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\swan.mp3 |
| 43 | tree | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\tree.mp3 |
| 44 | volcano | núi lửa | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\volcano.mp3 |
| 45 | waterfall | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\waterfall.mp3 |

### UNIT 9. ALL ABOUT ME (`all-about-me`)

- Unit order: 9
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | angry | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\angry.mp3 |
| 2 | baby | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\baby.mp3 |
| 3 | brother | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\brother.mp3 |
| 4 | dad | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\dad.mp3 |
| 5 | happy | 1,2,3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\happy.mp3 |
| 6 | hungry | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hungry.mp3 |
| 7 | mom | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mom.mp3 |
| 8 | pencil | bút chì | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pencil.mp3 |
| 9 | sad | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sad.mp3 |
| 10 | scared | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\scared.mp3 |
| 11 | sister | chị/em gái | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sister.mp3 |
| 12 | tired | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\tired.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | angry | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\angry.mp3 |
| 2 | baby | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\baby.mp3 |
| 3 | brother | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\brother.mp3 |
| 4 | dad | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\dad.mp3 |
| 5 | grandma | bà | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\grandma.mp3 |
| 6 | grandpa | ông | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\grandpa.mp3 |
| 7 | happy | 1,2,3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\happy.mp3 |
| 8 | hungry | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hungry.mp3 |
| 9 | mom | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mom.mp3 |
| 10 | nervous | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\nervous.mp3 |
| 11 | pencil | bút chì | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pencil.mp3 |
| 12 | sad | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sad.mp3 |
| 13 | scared | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\scared.mp3 |
| 14 | silly | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\silly.mp3 |
| 15 | sister | chị/em gái | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sister.mp3 |
| 16 | sleepy | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sleepy.mp3 |
| 17 | tired | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\tired.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | angry | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\angry.mp3 |
| 2 | aunt | cô/dì | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\aunt.mp3 |
| 3 | baby | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\baby.mp3 |
| 4 | brother | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\brother.mp3 |
| 5 | cry | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cry.mp3 |
| 6 | dad | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\dad.mp3 |
| 7 | grandma | bà | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\grandma.mp3 |
| 8 | grandpa | ông | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\grandpa.mp3 |
| 9 | happy | 1,2,3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\happy.mp3 |
| 10 | hungry | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hungry.mp3 |
| 11 | mom | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mom.mp3 |
| 12 | nervous | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\nervous.mp3 |
| 13 | pencil | bút chì | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pencil.mp3 |
| 14 | sad | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sad.mp3 |
| 15 | scared | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\scared.mp3 |
| 16 | shy | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shy.mp3 |
| 17 | silly | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\silly.mp3 |
| 18 | sister | chị/em gái | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sister.mp3 |
| 19 | sleepy | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sleepy.mp3 |
| 20 | tired | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\tired.mp3 |
| 21 | uncle | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\uncle.mp3 |
| 22 | wake up | thức dậy | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\wake up.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | angry | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\angry.mp3 |
| 2 | aunt | cô/dì | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\aunt.mp3 |
| 3 | baby | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\baby.mp3 |
| 4 | brother | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\brother.mp3 |
| 5 | brush my teeth | đánh răng | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\brush my teeth.mp3 |
| 6 | cry | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cry.mp3 |
| 7 | dad | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\dad.mp3 |
| 8 | do my homework | làm bài tập | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\do my homework.mp3 |
| 9 | elbow | khuỷu tay | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\elbow.mp3 |
| 10 | get dressed | mặc quần áo | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\get dressed.mp3 |
| 11 | go to school | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\go to school.mp3 |
| 12 | grandma | bà | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\grandma.mp3 |
| 13 | grandpa | ông | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\grandpa.mp3 |
| 14 | happy | 1,2,3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\happy.mp3 |
| 15 | hungry | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hungry.mp3 |
| 16 | love | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\love.mp3 |
| 17 | mom | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mom.mp3 |
| 18 | nervous | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\nervous.mp3 |
| 19 | pencil | bút chì | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pencil.mp3 |
| 20 | read a book | đọc sách | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\read a book.mp3 |
| 21 | sad | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sad.mp3 |
| 22 | scared | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\scared.mp3 |
| 23 | shy | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shy.mp3 |
| 24 | sick | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sick.mp3 |
| 25 | silly | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\silly.mp3 |
| 26 | sister | chị/em gái | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sister.mp3 |
| 27 | sleepy | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sleepy.mp3 |
| 28 | suprised | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\suprised.mp3 |
| 29 | tired | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\tired.mp3 |
| 30 | uncle | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\uncle.mp3 |
| 31 | wake up | thức dậy | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\wake up.mp3 |
| 32 | wash my hand | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\wash my hand.mp3 |

### UNIT 10. CLASS, SCHOOL & 5 SENSES (`class-school-&-5-senses`)

- Unit order: 10
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bag | cặp | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bag.mp3 |
| 2 | crayon | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\crayon.mp3 |
| 3 | ear | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ear.mp3 |
| 4 | eraser | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\eraser.mp3 |
| 5 | eye | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\eye.mp3 |
| 6 | glue | keo | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\glue.mp3 |
| 7 | hear | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hear.mp3 |
| 8 | mouth | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\mouth.mp3 |
| 9 | nose | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\nose.mp3 |
| 10 | pen | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pen.mp3 |
| 11 | pencil | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\pencil.mp3 |
| 12 | pencil case | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pencil case.mp3 |
| 13 | ruler | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ruler.mp3 |
| 14 | see | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\see.mp3 |
| 15 | skin | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\skin.mp3 |
| 16 | smell | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\smell.mp3 |
| 17 | sofa | ghế sofa | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sofa.mp3 |
| 18 | taste | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\taste.mp3 |
| 19 | touch | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\touch.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | arm | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\arm.mp3 |
| 2 | bag | cặp | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bag.mp3 |
| 3 | book | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\book.mp3 |
| 4 | chair | ghế | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\chair.mp3 |
| 5 | crayon | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\crayon.mp3 |
| 6 | ear | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ear.mp3 |
| 7 | eraser | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\eraser.mp3 |
| 8 | eye | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\eye.mp3 |
| 9 | glue | keo | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\glue.mp3 |
| 10 | head | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\head.mp3 |
| 11 | hear | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hear.mp3 |
| 12 | leg | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\leg.mp3 |
| 13 | mouth | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\mouth.mp3 |
| 14 | nose | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\nose.mp3 |
| 15 | pen | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pen.mp3 |
| 16 | pencil | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\pencil.mp3 |
| 17 | pencil case | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pencil case.mp3 |
| 18 | ruler | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ruler.mp3 |
| 19 | see | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\see.mp3 |
| 20 | shoulder | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shoulder.mp3 |
| 21 | skin | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\skin.mp3 |
| 22 | smell | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\smell.mp3 |
| 23 | sofa | ghế sofa | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sofa.mp3 |
| 24 | table | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\table.mp3 |
| 25 | taste | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\taste.mp3 |
| 26 | touch | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\touch.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | arm | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\arm.mp3 |
| 2 | bag | cặp | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bag.mp3 |
| 3 | book | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\book.mp3 |
| 4 | chair | ghế | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\chair.mp3 |
| 5 | crayon | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\crayon.mp3 |
| 6 | ear | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ear.mp3 |
| 7 | eraser | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\eraser.mp3 |
| 8 | eye | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\eye.mp3 |
| 9 | folder | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\folder.mp3 |
| 10 | foot | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\foot.mp3 |
| 11 | glue | keo | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\glue.mp3 |
| 12 | hand | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hand.mp3 |
| 13 | head | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\head.mp3 |
| 14 | hear | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hear.mp3 |
| 15 | knee | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\knee.mp3 |
| 16 | leg | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\leg.mp3 |
| 17 | marker | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\marker.mp3 |
| 18 | mouth | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\mouth.mp3 |
| 19 | neck | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\neck.mp3 |
| 20 | nose | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\nose.mp3 |
| 21 | pen | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pen.mp3 |
| 22 | pencil | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\pencil.mp3 |
| 23 | pencil case | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pencil case.mp3 |
| 24 | ruler | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ruler.mp3 |
| 25 | see | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\see.mp3 |
| 26 | sharpener | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sharpener.mp3 |
| 27 | shoulder | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shoulder.mp3 |
| 28 | skin | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\skin.mp3 |
| 29 | smell | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\smell.mp3 |
| 30 | sofa | ghế sofa | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sofa.mp3 |
| 31 | table | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\table.mp3 |
| 32 | taste | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\taste.mp3 |
| 33 | touch | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\touch.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | arm | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\arm.mp3 |
| 2 | bag | cặp | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bag.mp3 |
| 3 | board | bảng | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\board.mp3 |
| 4 | body | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\body.mp3 |
| 5 | book | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\book.mp3 |
| 6 | calculator | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\calculator.mp3 |
| 7 | chair | ghế | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\chair.mp3 |
| 8 | crayon | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\crayon.mp3 |
| 9 | dictionary | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\dictionary.mp3 |
| 10 | ear | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ear.mp3 |
| 11 | eat | ăn | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\eat.mp3 |
| 12 | elbow | 4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\elbow.mp3 |
| 13 | eraser | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\eraser.mp3 |
| 14 | eye | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\eye.mp3 |
| 15 | face | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\face.mp3 |
| 16 | finger | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\finger.mp3 |
| 17 | folder | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\folder.mp3 |
| 18 | foot | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\foot.mp3 |
| 19 | glue | keo | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\glue.mp3 |
| 20 | hand | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hand.mp3 |
| 21 | head | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\head.mp3 |
| 22 | hear | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hear.mp3 |
| 23 | knee | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\knee.mp3 |
| 24 | leg | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\leg.mp3 |
| 25 | marker | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\marker.mp3 |
| 26 | mouth | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\mouth.mp3 |
| 27 | neck | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\neck.mp3 |
| 28 | nose | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\nose.mp3 |
| 29 | page | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\page.mp3 |
| 30 | pen | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pen.mp3 |
| 31 | pencil | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\pencil.mp3 |
| 32 | pencil case | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pencil case.mp3 |
| 33 | ruler | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ruler.mp3 |
| 34 | scissors | kéo | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\scissors.mp3 |
| 35 | see | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\see.mp3 |
| 36 | sharpener | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sharpener.mp3 |
| 37 | shoulder | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shoulder.mp3 |
| 38 | skin | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\skin.mp3 |
| 39 | smell | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\smell.mp3 |
| 40 | sofa | ghế sofa | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sofa.mp3 |
| 41 | table | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\table.mp3 |
| 42 | taste | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\taste.mp3 |
| 43 | toe | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\toe.mp3 |
| 44 | touch | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\touch.mp3 |

### UNIT 11. MY HOUSE (`my-house`)

- Unit order: 11
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bathroom | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bathroom.mp3 |
| 2 | bed | giường | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bed.mp3 |
| 3 | bedroom | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bedroom.mp3 |
| 4 | clock | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\clock.mp3 |
| 5 | dining room | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dining room.mp3 |
| 6 | door | cửa | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\door.mp3 |
| 7 | kitchen | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\kitchen.mp3 |
| 8 | lamp | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lamp.mp3 |
| 9 | living room | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\living room.mp3 |
| 10 | pillow | gối | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pillow.mp3 |
| 11 | radio | radio | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\radio.mp3 |
| 12 | santa claus | ông già Noel | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\santa claus.mp3 |
| 13 | sofa | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\sofa.mp3 |
| 14 | TV | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Tv.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | balcony | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\balcony.mp3 |
| 2 | bathroom | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bathroom.mp3 |
| 3 | bed | giường | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bed.mp3 |
| 4 | bedroom | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bedroom.mp3 |
| 5 | clock | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\clock.mp3 |
| 6 | dining room | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dining room.mp3 |
| 7 | door | cửa | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\door.mp3 |
| 8 | garden | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\garden.mp3 |
| 9 | kitchen | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\kitchen.mp3 |
| 10 | lamp | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lamp.mp3 |
| 11 | living room | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\living room.mp3 |
| 12 | mirror | gương | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mirror.mp3 |
| 13 | pillow | gối | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pillow.mp3 |
| 14 | radio | radio | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\radio.mp3 |
| 15 | santa claus | ông già Noel | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\santa claus.mp3 |
| 16 | sofa | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\sofa.mp3 |
| 17 | telephone | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\telephone.mp3 |
| 18 | TV | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Tv.mp3 |
| 19 | window | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\window.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | balcony | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\balcony.mp3 |
| 2 | bathroom | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bathroom.mp3 |
| 3 | bed | giường | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bed.mp3 |
| 4 | bedroom | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bedroom.mp3 |
| 5 | clock | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\clock.mp3 |
| 6 | dining room | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dining room.mp3 |
| 7 | door | cửa | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\door.mp3 |
| 8 | garage | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\garage.mp3 |
| 9 | garden | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\garden.mp3 |
| 10 | kitchen | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\kitchen.mp3 |
| 11 | lamp | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lamp.mp3 |
| 12 | living room | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\living room.mp3 |
| 13 | mirror | gương | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mirror.mp3 |
| 14 | pillow | gối | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pillow.mp3 |
| 15 | radio | radio | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\radio.mp3 |
| 16 | santa claus | ông già Noel | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\santa claus.mp3 |
| 17 | shampoo | dầu gội | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\shampoo.mp3 |
| 18 | soap | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\soap.mp3 |
| 19 | sofa | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\sofa.mp3 |
| 20 | telephone | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\telephone.mp3 |
| 21 | toothbrush | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\toothbrush.mp3 |
| 22 | toothpaste | kem đánh răng | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\toothpaste.mp3 |
| 23 | towel | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\towel.mp3 |
| 24 | TV | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Tv.mp3 |
| 25 | window | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\window.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | balcony | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\balcony.mp3 |
| 2 | bath | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bath.mp3 |
| 3 | bathroom | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bathroom.mp3 |
| 4 | bed | giường | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bed.mp3 |
| 5 | bedroom | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bedroom.mp3 |
| 6 | clock | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\clock.mp3 |
| 7 | dining room | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dining room.mp3 |
| 8 | door | cửa | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\door.mp3 |
| 9 | eat | 4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\eat.mp3 |
| 10 | garage | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\garage.mp3 |
| 11 | garden | 2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\garden.mp3 |
| 12 | kitchen | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\kitchen.mp3 |
| 13 | lamp | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lamp.mp3 |
| 14 | living room | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\living room.mp3 |
| 15 | mirror | gương | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mirror.mp3 |
| 16 | pillow | gối | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pillow.mp3 |
| 17 | radio | radio | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\radio.mp3 |
| 18 | santa claus | ông già Noel | pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\santa claus.mp3 |
| 19 | shampoo | dầu gội | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\shampoo.mp3 |
| 20 | shower | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\shower.mp3 |
| 21 | sink | bồn rửa | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sink.mp3 |
| 22 | sleep | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sleep.mp3 |
| 23 | soap | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\soap.mp3 |
| 24 | sofa | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\sofa.mp3 |
| 25 | study | 4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\study.mp3 |
| 26 | telephone | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\telephone.mp3 |
| 27 | toothbrush | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\toothbrush.mp3 |
| 28 | toothpaste | kem đánh răng | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\toothpaste.mp3 |
| 29 | towel | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\towel.mp3 |
| 30 | TV | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Tv.mp3 |
| 31 | wash | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\wash.mp3 |
| 32 | watch TV | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\watch TV.mp3 |
| 33 | window | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\window.mp3 |

### UNIT 12. CHRISTMAS & HAPPY NEW YEAR (`christmas-&-happy-new-year`)

- Unit order: 12
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | christmas tree | cây thông Noel | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\christmas tree.mp3 |
| 2 | coconut | 1 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\coconut.mp3 |
| 3 | fig | 1 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\fig.mp3 |
| 4 | gift | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\gift.mp3 |
| 5 | mango | 1 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\mango.mp3 |
| 6 | papaya | 1 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\papaya.mp3 |
| 7 | santa claus | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\santa claus.mp3 |
| 8 | sleigh | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sleigh.mp3 |
| 9 | snowman | người tuyết | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\snowman.mp3 |
| 10 | watermelon | 1 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\watermelon.mp3 |
| 11 | wreath | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\wreath.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | balloon | 2 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\balloon.mp3 |
| 2 | candles | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\candles.mp3 |
| 3 | champagne | 2 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\champagne.mp3 |
| 4 | christmas tree | cây thông Noel | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\christmas tree.mp3 |
| 5 | confetti | 2 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\confetti.mp3 |
| 6 | dragon dance | 2 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dragon dance.mp3 |
| 7 | elf | 2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\elf.mp3 |
| 8 | firework | 2 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\firework.mp3 |
| 9 | gift | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\gift.mp3 |
| 10 | gingerbread | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ginger bread.mp3 |
| 11 | lucky money | 2 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\lucky money.mp3 |
| 12 | party hat | 2 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\party hat.mp3 |
| 13 | restaurant | nhà hàng | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\restaurant.mp3 |
| 14 | santa claus | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\santa claus.mp3 |
| 15 | sleigh | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sleigh.mp3 |
| 16 | snowman | người tuyết | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\snowman.mp3 |
| 17 | sticky rice cake | 2 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sticky rice cake.mp3 |
| 18 | stocking | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\stocking.mp3 |
| 19 | wreath | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\wreath.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | candles | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\candles.mp3 |
| 2 | cat | 3,4 | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cat.mp3 |
| 3 | cat zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\cat.mp3 |
| 4 | christmas tree | cây thông Noel | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\christmas tree.mp3 |
| 5 | cock | dậu | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cock.mp3 |
| 6 | cock zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\cock.mp3 |
| 7 | dog | tuất | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dog.mp3 |
| 8 | dog zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\dog.mp3 |
| 9 | dragon | thìn | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dragon.mp3 |
| 10 | dragon zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\dragon.mp3 |
| 11 | elf | 2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\elf.mp3 |
| 12 | gift | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\gift.mp3 |
| 13 | gingerbread | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ginger bread.mp3 |
| 14 | goat | mùi | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\goat.mp3 |
| 15 | goat zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\goat.mp3 |
| 16 | horse | ngọ | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\horse.mp3 |
| 17 | horse zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\horse.mp3 |
| 18 | jingle bell | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\jingle bell.mp3 |
| 19 | monkey | thân | pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\monkey.mp3 |
| 20 | monkey zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\monkey.mp3 |
| 21 | ox | 3,4 | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ox.mp3 |
| 22 | ox zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\ox.mp3 |
| 23 | pig | 3,4 | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\pig.mp3 |
| 24 | pig zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\pig.mp3 |
| 25 | rat | 3,4 | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\rat.mp3 |
| 26 | rat zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\rat.mp3 |
| 27 | reindeer | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\reindeer.mp3 |
| 28 | santa claus | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\santa claus.mp3 |
| 29 | sleigh | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sleigh.mp3 |
| 30 | snake | tỵ | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\snake.mp3 |
| 31 | snake zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\snake.mp3 |
| 32 | snowball | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\snowball.mp3 |
| 33 | snowman | người tuyết | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\snowman.mp3 |
| 34 | stocking | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\stocking.mp3 |
| 35 | tiger | dần | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\tiger.mp3 |
| 36 | tiger zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\tiger.mp3 |
| 37 | wreath | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\wreath.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | candles | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\candles.mp3 |
| 2 | candy cane | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\candy cane.mp3 |
| 3 | cat | 3,4 | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cat.mp3 |
| 4 | cat zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\cat.mp3 |
| 5 | chimney | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\chimney.mp3 |
| 6 | christmas tree | cây thông Noel | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\christmas tree.mp3 |
| 7 | cock | dậu | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cock.mp3 |
| 8 | cock zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\cock.mp3 |
| 9 | decorate | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\decorate.mp3 |
| 10 | dog | tuất | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dog.mp3 |
| 11 | dog zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\dog.mp3 |
| 12 | dragon | thìn | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dragon.mp3 |
| 13 | dragon zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\dragon.mp3 |
| 14 | elf | 2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\elf.mp3 |
| 15 | gift | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\gift.mp3 |
| 16 | gingerbread | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ginger bread.mp3 |
| 17 | go to the pagoda | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\go to the pagoda.mp3 |
| 18 | goat | mùi | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\goat.mp3 |
| 19 | goat zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\goat.mp3 |
| 20 | horse | ngọ | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\horse.mp3 |
| 21 | horse zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\horse.mp3 |
| 22 | jingle bell | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\jingle bell.mp3 |
| 23 | monkey | thân | pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\monkey.mp3 |
| 24 | monkey zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\monkey.mp3 |
| 25 | ornament | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ornament.mp3 |
| 26 | ox | 3,4 | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ox.mp3 |
| 27 | ox zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\ox.mp3 |
| 28 | pig | 3,4 | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\pig.mp3 |
| 29 | pig zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\pig.mp3 |
| 30 | rat | 3,4 | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\rat.mp3 |
| 31 | rat zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\rat.mp3 |
| 32 | receive lucky money | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\receive lucky money.mp3 |
| 33 | reindeer | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\reindeer.mp3 |
| 34 | ribbon | 4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\ribbon.mp3 |
| 35 | santa claus | 1,2,3,4 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\santa claus.mp3 |
| 36 | sleigh | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sleigh.mp3 |
| 37 | snake | tỵ | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\snake.mp3 |
| 38 | snake zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\snake.mp3 |
| 39 | snowball | 3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\snowball.mp3 |
| 40 | snowman | người tuyết | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\snowman.mp3 |
| 41 | star | 4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\star.mp3 |
| 42 | stocking | 2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\stocking.mp3 |
| 43 | tiger | dần | lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\tiger.mp3 |
| 44 | tiger zodiac | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\tiger.mp3 |
| 45 | watch fireworks | 4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\watch fireworks.mp3 |
| 46 | wreath | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\wreath.mp3 |

---

## Cấp bậc game: Starters

### UNIT 1 (`unit-1`)

- Unit order: 13
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bathroom | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\bathroom.mp3 |
| 2 | bedroom | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\bedroom.mp3 |
| 3 | bees | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bees.mp3 |
| 4 | bird | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bird.mp3 |
| 5 | cow | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\cow.mp3 |
| 6 | dining room | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\dining room.mp3 |
| 7 | duck | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\duck.mp3 |
| 8 | fish | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\fish.mp3 |
| 9 | frog | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\frog.mp3 |
| 10 | goat | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\goat.mp3 |
| 11 | hall | 3.4 | listenchoose, lookchoose | 1, 2 | ✅ Có file | frontend\public\assets\audios\hall.mp3 |
| 12 | horse | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\horse.mp3 |
| 13 | kitchen | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\kitchen.mp3 |
| 14 | living room | 3.4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\living room.mp3 |
| 15 | mouse | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mouse.mp3 |
| 16 | sheep | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sheep.mp3 |
| 17 | television | ti vi | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\television.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bathroom | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\bathroom.mp3 |
| 2 | bedroom | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\bedroom.mp3 |
| 3 | bees | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bees.mp3 |
| 4 | bird | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bird.mp3 |
| 5 | cow | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\cow.mp3 |
| 6 | dining room | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\dining room.mp3 |
| 7 | duck | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\duck.mp3 |
| 8 | fish | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\fish.mp3 |
| 9 | frog | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\frog.mp3 |
| 10 | goat | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\goat.mp3 |
| 11 | hall | 3.4 | listenchoose, lookchoose | 1, 2 | ✅ Có file | frontend\public\assets\audios\hall.mp3 |
| 12 | horse | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\horse.mp3 |
| 13 | kitchen | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\kitchen.mp3 |
| 14 | living room | 3.4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\living room.mp3 |
| 15 | mouse | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mouse.mp3 |
| 16 | sheep | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sheep.mp3 |
| 17 | television | ti vi | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\television.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bathroom | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bathroom.mp3 |
| 2 | bedroom | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bedroom.mp3 |
| 3 | bees | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\bees.mp3 |
| 4 | bird | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\bird.mp3 |
| 5 | cow | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\cow.mp3 |
| 6 | dining room | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dining room.mp3 |
| 7 | duck | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\duck.mp3 |
| 8 | fish | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\fish.mp3 |
| 9 | frog | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\frog.mp3 |
| 10 | goat | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\goat.mp3 |
| 11 | hall | 3.4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\hall.mp3 |
| 12 | horse | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\horse.mp3 |
| 13 | kitchen | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\kitchen.mp3 |
| 14 | living room | 3.4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\living room.mp3 |
| 15 | mouse | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\mouse.mp3 |
| 16 | sheep | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\sheep.mp3 |
| 17 | television | 1.2 | lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\television.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bathroom | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bathroom.mp3 |
| 2 | bedroom | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bedroom.mp3 |
| 3 | bees | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\bees.mp3 |
| 4 | bird | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\bird.mp3 |
| 5 | cow | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\cow.mp3 |
| 6 | dining room | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dining room.mp3 |
| 7 | duck | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\duck.mp3 |
| 8 | fish | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\fish.mp3 |
| 9 | frog | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\frog.mp3 |
| 10 | goat | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\goat.mp3 |
| 11 | hall | 3.4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\hall.mp3 |
| 12 | horse | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\horse.mp3 |
| 13 | kitchen | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\kitchen.mp3 |
| 14 | living room | 3.4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\living room.mp3 |
| 15 | mouse | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\mouse.mp3 |
| 16 | sheep | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\sheep.mp3 |
| 17 | television | 1.2 | lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\television.mp3 |

### UNIT 2 (`unit-2`)

- Unit order: 14
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | armchair | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Armchair.mp3 |
| 2 | bathroom | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\bathroom.mp3 |
| 3 | bed | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\bed.mp3 |
| 4 | bedroom | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\bedroom.mp3 |
| 5 | bookcase | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bookcase.mp3 |
| 6 | chair | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\chair.mp3 |
| 7 | clock | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\clock.mp3 |
| 8 | cow | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\cow.mp3 |
| 9 | cupboard | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\cupboard.mp3 |
| 10 | dining room | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\dining room.mp3 |
| 11 | door | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\door.mp3 |
| 12 | duck | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\duck.mp3 |
| 13 | flower | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\flower.mp3 |
| 14 | frog | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\frog.mp3 |
| 15 | grandpa | ông | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\grandpa.mp3 |
| 16 | hall | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\hall.mp3 |
| 17 | lamp | 1.2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lamp.mp3 |
| 18 | living room | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\living room.mp3 |
| 19 | mat | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\mat.mp3 |
| 20 | mirror | 3.4 | listenchoose, lookchoose | 1, 2 | ✅ Có file | frontend\public\assets\audios\mirror.mp3 |
| 21 | picture | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\picture.mp3 |
| 22 | rug | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\rug.mp3 |
| 23 | sofa | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sofa.mp3 |
| 24 | table | 1.2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\table.mp3 |
| 25 | television | 1.2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\television.mp3 |
| 26 | wall | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\wall.mp3 |
| 27 | window | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\window.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | armchair | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Armchair.mp3 |
| 2 | bathroom | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\bathroom.mp3 |
| 3 | bed | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\bed.mp3 |
| 4 | bedroom | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\bedroom.mp3 |
| 5 | bookcase | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bookcase.mp3 |
| 6 | chair | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\chair.mp3 |
| 7 | clock | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\clock.mp3 |
| 8 | cow | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\cow.mp3 |
| 9 | cupboard | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\cupboard.mp3 |
| 10 | dining room | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\dining room.mp3 |
| 11 | door | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\door.mp3 |
| 12 | duck | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\duck.mp3 |
| 13 | flower | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\flower.mp3 |
| 14 | frog | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\frog.mp3 |
| 15 | grandpa | ông | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\grandpa.mp3 |
| 16 | hall | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\hall.mp3 |
| 17 | lamp | 1.2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lamp.mp3 |
| 18 | living room | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\living room.mp3 |
| 19 | mat | 3.4 | listenchoose, lookchoose | 2 | ✅ Có file | frontend\public\assets\audios\mat.mp3 |
| 20 | mirror | 3.4 | listenchoose, lookchoose | 1, 2 | ✅ Có file | frontend\public\assets\audios\mirror.mp3 |
| 21 | picture | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\picture.mp3 |
| 22 | rug | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\rug.mp3 |
| 23 | sofa | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sofa.mp3 |
| 24 | table | 1.2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\table.mp3 |
| 25 | television | 1.2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\television.mp3 |
| 26 | wall | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\wall.mp3 |
| 27 | window | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\window.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | armchair | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\Armchair.mp3 |
| 2 | bathroom | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bathroom.mp3 |
| 3 | bed | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bed.mp3 |
| 4 | bedroom | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bedroom.mp3 |
| 5 | bookcase | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\bookcase.mp3 |
| 6 | chair | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\chair.mp3 |
| 7 | clock | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\clock.mp3 |
| 8 | cow | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cow.mp3 |
| 9 | cupboard | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cupboard.mp3 |
| 10 | dining room | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dining room.mp3 |
| 11 | door | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\door.mp3 |
| 12 | duck | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\duck.mp3 |
| 13 | flower | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\flower.mp3 |
| 14 | frog | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\frog.mp3 |
| 15 | grandpa | 1.2 | lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\grandpa.mp3 |
| 16 | hall | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hall.mp3 |
| 17 | lamp | 1.2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lamp.mp3 |
| 18 | living room | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\living room.mp3 |
| 19 | mat | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\mat.mp3 |
| 20 | mirror | 3.4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\mirror.mp3 |
| 21 | picture | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\picture.mp3 |
| 22 | rug | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\rug.mp3 |
| 23 | sofa | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\sofa.mp3 |
| 24 | table | 1.2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\table.mp3 |
| 25 | television | 1.2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\television.mp3 |
| 26 | wall | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\wall.mp3 |
| 27 | window | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\window.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | armchair | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\Armchair.mp3 |
| 2 | bathroom | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bathroom.mp3 |
| 3 | bed | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bed.mp3 |
| 4 | bedroom | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bedroom.mp3 |
| 5 | bookcase | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\bookcase.mp3 |
| 6 | chair | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\chair.mp3 |
| 7 | clock | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\clock.mp3 |
| 8 | cow | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cow.mp3 |
| 9 | cupboard | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\cupboard.mp3 |
| 10 | dining room | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dining room.mp3 |
| 11 | door | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\door.mp3 |
| 12 | duck | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\duck.mp3 |
| 13 | flower | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\flower.mp3 |
| 14 | frog | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\frog.mp3 |
| 15 | grandpa | 1.2 | lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\grandpa.mp3 |
| 16 | hall | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hall.mp3 |
| 17 | lamp | 1.2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lamp.mp3 |
| 18 | living room | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\living room.mp3 |
| 19 | mat | 3.4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\mat.mp3 |
| 20 | mirror | 3.4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\mirror.mp3 |
| 21 | picture | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\picture.mp3 |
| 22 | rug | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\rug.mp3 |
| 23 | sofa | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\sofa.mp3 |
| 24 | table | 1.2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\table.mp3 |
| 25 | television | 1.2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\television.mp3 |
| 26 | wall | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\wall.mp3 |
| 27 | window | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\window.mp3 |

### UNIT 3 (`unit-3`)

- Unit order: 15
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | baby | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\baby.mp3 |
| 2 | brother | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\brother.mp3 |
| 3 | cousin | 1.2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\cousin.mp3 |
| 4 | dad | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\dad.mp3 |
| 5 | grandma | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\grandma.mp3 |
| 6 | grandpa | 1.2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\grandpa.mp3 |
| 7 | lemon | chanh | lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lemon.mp3 |
| 8 | mom | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mom.mp3 |
| 9 | sister | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sister.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | baby | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\baby.mp3 |
| 2 | brother | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\brother.mp3 |
| 3 | cousin | 1.2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\cousin.mp3 |
| 4 | dad | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\dad.mp3 |
| 5 | grandma | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\grandma.mp3 |
| 6 | grandpa | 1.2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\grandpa.mp3 |
| 7 | lemon | chanh | lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lemon.mp3 |
| 8 | mom | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mom.mp3 |
| 9 | sister | 1.2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sister.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | baby | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\baby.mp3 |
| 2 | big | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\big.mp3 |
| 3 | brother | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\brother.mp3 |
| 4 | cousin | 1.2 | listenchoose, lookchoose | 1, 2 | ✅ Có file | frontend\public\assets\audios\cousin.mp3 |
| 5 | dad | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\dad.mp3 |
| 6 | funny | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\funny.mp3 |
| 7 | grandma | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\grandma.mp3 |
| 8 | grandpa | 1.2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\grandpa.mp3 |
| 9 | happy | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\happy.mp3 |
| 10 | mom | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\mom.mp3 |
| 11 | old | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\old.mp3 |
| 12 | sad | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sad.mp3 |
| 13 | silly | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\silly.mp3 |
| 14 | sister | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\sister.mp3 |
| 15 | small | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\small.mp3 |
| 16 | young | 3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\young.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | baby | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\baby.mp3 |
| 2 | big | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\big.mp3 |
| 3 | brother | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\brother.mp3 |
| 4 | cousin | 1.2 | listenchoose, lookchoose | 1, 2 | ✅ Có file | frontend\public\assets\audios\cousin.mp3 |
| 5 | dad | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\dad.mp3 |
| 6 | funny | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\funny.mp3 |
| 7 | grandma | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\grandma.mp3 |
| 8 | grandpa | 1.2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\grandpa.mp3 |
| 9 | happy | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\happy.mp3 |
| 10 | lemon | chanh | lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lemon.mp3 |
| 11 | mom | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\mom.mp3 |
| 12 | old | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\old.mp3 |
| 13 | sad | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sad.mp3 |
| 14 | silly | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\silly.mp3 |
| 15 | sister | 1.2 | listenchoose, lookchoose | 1 | ✅ Có file | frontend\public\assets\audios\sister.mp3 |
| 16 | small | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\small.mp3 |
| 17 | young | 3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\young.mp3 |

### UNIT 4 (`unit-4`)

- Unit order: 16
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | breakfast | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\breakfast.mp3 |
| 2 | dinner | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\dinner.mp3 |
| 3 | favourite | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\favourite.mp3 |
| 4 | grapes | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\grapes.mp3 |
| 5 | hat | 1,2 | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\hat.mp3 |
| 6 | kiwi | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\kiwi.mp3 |
| 7 | lemon | 1,2,4 | listenchoose | 1, 2 | ✅ Có file | frontend\public\assets\audios\lemon.mp3 |
| 8 | lime | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lime.mp3 |
| 9 | lunch | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lunch.mp3 |
| 10 | mango | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\mango.mp3 |
| 11 | meal | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\meal.mp3 |
| 12 | pear | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\pear.mp3 |
| 13 | Pineapple | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\pineapple.mp3 |
| 14 | watermelon | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\watermelon.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | breakfast | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\breakfast.mp3 |
| 2 | dinner | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\dinner.mp3 |
| 3 | favourite | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\favourite.mp3 |
| 4 | grapes | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\grapes.mp3 |
| 5 | hat | 1,2 | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\hat.mp3 |
| 6 | kiwi | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\kiwi.mp3 |
| 7 | lemon | 1,2,4 | listenchoose | 1, 2 | ✅ Có file | frontend\public\assets\audios\lemon.mp3 |
| 8 | lime | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lime.mp3 |
| 9 | lunch | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lunch.mp3 |
| 10 | mango | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\mango.mp3 |
| 11 | meal | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\meal.mp3 |
| 12 | pear | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\pear.mp3 |
| 13 | Pineapple | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\pineapple.mp3 |
| 14 | watermelon | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\watermelon.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | beans | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\beans.mp3 |
| 2 | burger | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\burger.mp3 |
| 3 | chips | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\chips.mp3 |
| 4 | eggs | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\eggs.mp3 |
| 5 | fish | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\fish.mp3 |
| 6 | fruit | 3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\fruit.mp3 |
| 7 | rice | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\rice.mp3 |
| 8 | sausage | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sausage.mp3 |
| 9 | tomatoes | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\tomatoes.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | beans | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\beans.mp3 |
| 2 | breakfast | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\breakfast.mp3 |
| 3 | burger | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\burger.mp3 |
| 4 | chips | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\chips.mp3 |
| 5 | dinner | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\dinner.mp3 |
| 6 | eggs | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\eggs.mp3 |
| 7 | favourite | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\favourite.mp3 |
| 8 | fish | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\fish.mp3 |
| 9 | fruit | 3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\fruit.mp3 |
| 10 | grapes | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\grapes.mp3 |
| 11 | kiwi | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\kiwi.mp3 |
| 12 | lemon | 1,2,4 | listenchoose | 1, 2 | ✅ Có file | frontend\public\assets\audios\lemon.mp3 |
| 13 | lime | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lime.mp3 |
| 14 | lunch | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lunch.mp3 |
| 15 | mango | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\mango.mp3 |
| 16 | meal | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\meal.mp3 |
| 17 | pear | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\pear.mp3 |
| 18 | Pineapple | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\pineapple.mp3 |
| 19 | rice | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\rice.mp3 |
| 20 | sausage | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sausage.mp3 |
| 21 | tomatoes | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\tomatoes.mp3 |
| 22 | watermelon | 1,2,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\watermelon.mp3 |

### UNIT 5 (`unit-5`)

- Unit order: 17
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | body | cơ thể | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\body.mp3 |
| 2 | coat | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\coat.mp3 |
| 3 | hat | 1,2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\hat.mp3 |
| 4 | jacket | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\jacket.mp3 |
| 5 | pants | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pants.mp3 |
| 6 | scarf | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\scarf.mp3 |
| 7 | shirt | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\shirt.mp3 |
| 8 | t-shirt | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\t-shirt.mp3 |
| 9 | trousers | 1,2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\trousers.mp3 |
| 10 | watch | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\watch.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | body | cơ thể | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\body.mp3 |
| 2 | coat | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\coat.mp3 |
| 3 | hat | 1,2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\hat.mp3 |
| 4 | jacket | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\jacket.mp3 |
| 5 | pants | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pants.mp3 |
| 6 | scarf | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\scarf.mp3 |
| 7 | shirt | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\shirt.mp3 |
| 8 | t-shirt | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\t-shirt.mp3 |
| 9 | trousers | 1,2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\trousers.mp3 |
| 10 | watch | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\watch.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bag | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bag.mp3 |
| 2 | belt | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\belt.mp3 |
| 3 | clothes | 3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\clothes.mp3 |
| 4 | dress | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dress.mp3 |
| 5 | handbag | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\handbag.mp3 |
| 6 | jeans | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\jeans.mp3 |
| 7 | shoes | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shoes.mp3 |
| 8 | skirt | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\skirt.mp3 |
| 9 | socks | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\socks.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bag | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bag.mp3 |
| 2 | belt | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\belt.mp3 |
| 3 | clothes | 3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\clothes.mp3 |
| 4 | dress | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\dress.mp3 |
| 5 | handbag | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\handbag.mp3 |
| 6 | jeans | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\jeans.mp3 |
| 7 | shoes | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\shoes.mp3 |
| 8 | skirt | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\skirt.mp3 |
| 9 | socks | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\socks.mp3 |

### UNIT 6 (`unit-6`)

- Unit order: 18
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | arm | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\arm.mp3 |
| 2 | body | 1,2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\body.mp3 |
| 3 | book | 1,2 | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\book.mp3 |
| 4 | ear | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ear.mp3 |
| 5 | eye | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\eye.mp3 |
| 6 | face | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\face.mp3 |
| 7 | feet | 1,2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\feet.mp3 |
| 8 | finger | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\finger.mp3 |
| 9 | foot | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\foot.mp3 |
| 10 | hair | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\hair.mp3 |
| 11 | hand | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\hand.mp3 |
| 12 | head | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\head.mp3 |
| 13 | leg | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\leg.mp3 |
| 14 | mouth | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mouth.mp3 |
| 15 | nose | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\nose.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | arm | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\arm.mp3 |
| 2 | body | 1,2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\body.mp3 |
| 3 | book | 1,2 | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\book.mp3 |
| 4 | ear | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ear.mp3 |
| 5 | eye | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\eye.mp3 |
| 6 | face | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\face.mp3 |
| 7 | feet | 1,2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\feet.mp3 |
| 8 | finger | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\finger.mp3 |
| 9 | foot | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\foot.mp3 |
| 10 | hair | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\hair.mp3 |
| 11 | hand | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\hand.mp3 |
| 12 | head | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\head.mp3 |
| 13 | leg | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\leg.mp3 |
| 14 | mouth | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\mouth.mp3 |
| 15 | nose | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\nose.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Alien | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\alien.mp3 |
| 2 | duck | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\duck.mp3 |
| 3 | Elephant | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\elephant.mp3 |
| 4 | frog | 3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\frog.mp3 |
| 5 | kite | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\kite.mp3 |
| 6 | robot | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\robot.mp3 |
| 7 | snake | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\snake.mp3 |
| 8 | spider | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\spider.mp3 |
| 9 | tiger | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\tiger.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Alien | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\alien.mp3 |
| 2 | duck | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\duck.mp3 |
| 3 | Elephant | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\elephant.mp3 |
| 4 | frog | 3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\frog.mp3 |
| 5 | kite | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\kite.mp3 |
| 6 | robot | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\robot.mp3 |
| 7 | snake | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\snake.mp3 |
| 8 | spider | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\spider.mp3 |
| 9 | tiger | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\tiger.mp3 |

### UNIT 7 (`unit-7`)

- Unit order: 19
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | board | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\board.mp3 |
| 2 | book | 1,2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\book.mp3 |
| 3 | computer | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\computer.mp3 |
| 4 | crayon | 1,2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\crayon.mp3 |
| 5 | keyboard | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\keyboard.mp3 |
| 6 | painting | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\painting.mp3 |
| 7 | pen | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pen.mp3 |
| 8 | play ground | 1 | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\play ground.mp3 |
| 9 | Poster | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\poster.mp3 |
| 10 | ruler | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ruler.mp3 |
| 11 | teacher | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\teacher.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | board | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\board.mp3 |
| 2 | book | 1,2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\book.mp3 |
| 3 | computer | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\computer.mp3 |
| 4 | crayon | 1,2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\crayon.mp3 |
| 5 | keyboard | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\keyboard.mp3 |
| 6 | painting | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\painting.mp3 |
| 7 | pen | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pen.mp3 |
| 8 | Poster | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\poster.mp3 |
| 9 | ruler | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ruler.mp3 |
| 10 | teacher | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\teacher.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | chair | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\chair.mp3 |
| 2 | cupboard | 3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\cupboard.mp3 |
| 3 | door | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\door.mp3 |
| 4 | mouse | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\mouse.mp3 |
| 5 | page | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\page.mp3 |
| 6 | paper | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\paper.mp3 |
| 7 | pencil | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\pencil.mp3 |
| 8 | rubber | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\rubber.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | chair | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\chair.mp3 |
| 2 | cupboard | 3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\cupboard.mp3 |
| 3 | door | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\door.mp3 |
| 4 | mouse | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\mouse.mp3 |
| 5 | page | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\page.mp3 |
| 6 | paper | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\paper.mp3 |
| 7 | pencil | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\pencil.mp3 |
| 8 | rubber | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\rubber.mp3 |

### UNIT 8 (`unit-8`)

- Unit order: 20
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | badminton | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Badminton.mp3 |
| 2 | baseball | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Baseball.mp3 |
| 3 | Basketball | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Basketball.mp3 |
| 4 | board games | 1,2 | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Board games.mp3 |
| 5 | football | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Football.mp3 |
| 6 | Hockey | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Hockey.mp3 |
| 7 | play ground | 1 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\play ground.mp3 |
| 8 | sport | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Sport.mp3 |
| 9 | Table tennis | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Table tennis.mp3 |
| 10 | tennis | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Tennis.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | board games | 1,2 | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Board games.mp3 |
| 2 | chicken | 2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\chicken.mp3 |
| 3 | Hockey | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Hockey.mp3 |
| 4 | hold | 2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\hold.mp3 |
| 5 | pear | 2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\pear.mp3 |
| 6 | point at | 2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Point at.mp3 |
| 7 | spider | 2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\spider.mp3 |
| 8 | tail | 2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Tail.mp3 |
| 9 | watch | 2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\watch.mp3 |
| 10 | wear | 2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Wear.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | board games | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Board games.mp3 |
| 2 | draw | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Draw.mp3 |
| 3 | fly a kite | 3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Fly a kite.mp3 |
| 4 | guitar | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Guitar.mp3 |
| 5 | paint | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\paint.mp3 |
| 6 | piano | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Piano.mp3 |
| 7 | song | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\song.mp3 |
| 8 | stories | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Stories.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | board games | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Board games.mp3 |
| 2 | draw | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Draw.mp3 |
| 3 | fly a kite | 3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Fly a kite.mp3 |
| 4 | guitar | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Guitar.mp3 |
| 5 | paint | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\paint.mp3 |
| 6 | piano | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Piano.mp3 |
| 7 | song | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\song.mp3 |
| 8 | stories | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Stories.mp3 |

### UNIT 9 (`unit-9`)

- Unit order: 21
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bed | giường | lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\bed.mp3 |
| 2 | board games | 1,2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\Board games.mp3 |
| 3 | draw | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Draw.mp3 |
| 4 | fish | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\fish.mp3 |
| 5 | fly a kite | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Fly a kite.mp3 |
| 6 | jump | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\jump.mp3 |
| 7 | listen to music | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\listen to music.mp3 |
| 8 | make cakes | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\make cakes.mp3 |
| 9 | paint | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\paint.mp3 |
| 10 | read a book | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\read a book.mp3 |
| 11 | run | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\run.mp3 |
| 12 | sing a song | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sing a song.mp3 |
| 13 | swimming | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\swimming.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bed | giường | lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\bed.mp3 |
| 2 | board games | 1,2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\Board games.mp3 |
| 3 | draw | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Draw.mp3 |
| 4 | fly a kite | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Fly a kite.mp3 |
| 5 | guitar | 2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Guitar.mp3 |
| 6 | paint | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\paint.mp3 |
| 7 | piano | 2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Piano.mp3 |
| 8 | song | 2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\song.mp3 |
| 9 | stories | 2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Stories.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | animals | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\animals.mp3 |
| 2 | bed | giường | lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\bed.mp3 |
| 3 | bike | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bike.mp3 |
| 4 | burger | 3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\burger.mp3 |
| 5 | flowers | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\flowers.mp3 |
| 6 | fun | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\fun.mp3 |
| 7 | kid | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\kid.mp3 |
| 8 | pictures | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\pictures.mp3 |
| 9 | sausage | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sausage.mp3 |
| 10 | skirt | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\skirt.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | animals | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\animals.mp3 |
| 2 | bed | giường | lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\bed.mp3 |
| 3 | bike | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bike.mp3 |
| 4 | burger | 3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\burger.mp3 |
| 5 | flowers | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\flowers.mp3 |
| 6 | fun | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\fun.mp3 |
| 7 | kid | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\kid.mp3 |
| 8 | pictures | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\pictures.mp3 |
| 9 | sausage | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\sausage.mp3 |
| 10 | skirt | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\skirt.mp3 |

### UNIT 10 (`unit-10`)

- Unit order: 22
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bed | 1,2,3,4 | listenchoose | 1, 2 | ✅ Có file | frontend\public\assets\audios\bed.mp3 |
| 2 | book | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\book.mp3 |
| 3 | breakfast | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\breakfast.mp3 |
| 4 | dinner | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\dinner.mp3 |
| 5 | football | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Football.mp3 |
| 6 | get up | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\get up.mp3 |
| 7 | go to bed | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\go to bed.mp3 |
| 8 | have bath | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\have bath.mp3 |
| 9 | have breakfast | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\have breakfast.mp3 |
| 10 | have lunch | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\have lunch.mp3 |
| 11 | lesson | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lesson.mp3 |
| 12 | motorbike | 1,2 | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\motorbike.mp3 |
| 13 | park | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\park.mp3 |
| 14 | put on clothes | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\put on clothes.mp3 |
| 15 | radio | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\radio.mp3 |
| 16 | school | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\school.mp3 |
| 17 | take a shower | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\take a shower.mp3 |
| 18 | televison | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\television.mp3 |
| 19 | watch TV | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\watch TV.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bed | 1,2,3,4 | listenchoose | 1, 2 | ✅ Có file | frontend\public\assets\audios\bed.mp3 |
| 2 | book | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\book.mp3 |
| 3 | breakfast | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\breakfast.mp3 |
| 4 | dinner | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\dinner.mp3 |
| 5 | football | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Football.mp3 |
| 6 | get up | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\get up.mp3 |
| 7 | go to bed | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\go to bed.mp3 |
| 8 | have bath | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\have bath.mp3 |
| 9 | have breakfast | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\have breakfast.mp3 |
| 10 | have lunch | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\have lunch.mp3 |
| 11 | lesson | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lesson.mp3 |
| 12 | motorbike | 1,2 | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\motorbike.mp3 |
| 13 | park | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\park.mp3 |
| 14 | put on clothes | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\put on clothes.mp3 |
| 15 | radio | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\radio.mp3 |
| 16 | school | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\school.mp3 |
| 17 | take a shower | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\take a shower.mp3 |
| 18 | televison | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\television.mp3 |
| 19 | watch TV | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\watch TV.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bed | 1,2,3,4 | listenchoose | 1, 2 | ✅ Có file | frontend\public\assets\audios\bed.mp3 |
| 2 | book | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\book.mp3 |
| 3 | breakfast | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\breakfast.mp3 |
| 4 | dinner | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\dinner.mp3 |
| 5 | football | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Football.mp3 |
| 6 | get up | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\get up.mp3 |
| 7 | go to bed | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\go to bed.mp3 |
| 8 | have bath | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\have bath.mp3 |
| 9 | have breakfast | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\have breakfast.mp3 |
| 10 | have lunch | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\have lunch.mp3 |
| 11 | lesson | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lesson.mp3 |
| 12 | park | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\park.mp3 |
| 13 | put on clothes | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\put on clothes.mp3 |
| 14 | radio | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\radio.mp3 |
| 15 | school | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\school.mp3 |
| 16 | take a shower | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\take a shower.mp3 |
| 17 | televison | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\television.mp3 |
| 18 | watch TV | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\watch TV.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bed | 1,2,3,4 | listenchoose | 1, 2 | ✅ Có file | frontend\public\assets\audios\bed.mp3 |
| 2 | book | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\book.mp3 |
| 3 | breakfast | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\breakfast.mp3 |
| 4 | dinner | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\dinner.mp3 |
| 5 | football | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Football.mp3 |
| 6 | get up | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\get up.mp3 |
| 7 | go to bed | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\go to bed.mp3 |
| 8 | have bath | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\have bath.mp3 |
| 9 | have breakfast | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\have breakfast.mp3 |
| 10 | have lunch | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\have lunch.mp3 |
| 11 | lesson | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lesson.mp3 |
| 12 | park | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\park.mp3 |
| 13 | put on clothes | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\put on clothes.mp3 |
| 14 | radio | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\radio.mp3 |
| 15 | school | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\school.mp3 |
| 16 | take a shower | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\take a shower.mp3 |
| 17 | televison | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\television.mp3 |
| 18 | watch TV | 1,2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\watch TV.mp3 |

### UNIT 11 (`unit-11`)

- Unit order: 23
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bike | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bike.mp3 |
| 2 | bus | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bus.mp3 |
| 3 | car | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\car.mp3 |
| 4 | helicopter | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\helicopter.mp3 |
| 5 | lorry | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Lorry.mp3 |
| 6 | motorbike | 1,2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\motorbike.mp3 |
| 7 | plane | 1,2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\plane.mp3 |
| 8 | ship | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ship.mp3 |
| 9 | train | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\train.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bike | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bike.mp3 |
| 2 | bus | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bus.mp3 |
| 3 | car | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\car.mp3 |
| 4 | helicopter | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\helicopter.mp3 |
| 5 | lorry | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Lorry.mp3 |
| 6 | motorbike | 1,2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\motorbike.mp3 |
| 7 | plane | 1,2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\plane.mp3 |
| 8 | ship | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ship.mp3 |
| 9 | train | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\train.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | boat | 3,4 | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\boat.mp3 |
| 2 | child | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\child.mp3 |
| 3 | children | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Children.mp3 |
| 4 | man | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\man.mp3 |
| 5 | men | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\men.mp3 |
| 6 | people | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\people.mp3 |
| 7 | person | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\person.mp3 |
| 8 | woman | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\woman.mp3 |
| 9 | women | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\women.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | boat | 3,4 | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\boat.mp3 |
| 2 | child | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\child.mp3 |
| 3 | children | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Children.mp3 |
| 4 | man | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\man.mp3 |
| 5 | men | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\men.mp3 |
| 6 | people | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\people.mp3 |
| 7 | person | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\person.mp3 |
| 8 | woman | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\woman.mp3 |
| 9 | women | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\women.mp3 |

### UNIT 12 (`unit-12`)

- Unit order: 24
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | beautiful | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\beautiful.mp3 |
| 2 | car | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\car.mp3 |
| 3 | clean | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\clean.mp3 |
| 4 | dirty | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\dirty.mp3 |
| 5 | dress | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\dress.mp3 |
| 6 | flat | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Flat.mp3 |
| 7 | funny | 1 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\funny.mp3 |
| 8 | horse | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\horse.mp3 |
| 9 | house | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\house.mp3 |
| 10 | jacket | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\jacket.mp3 |
| 11 | old | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\old.mp3 |
| 12 | polar bear | 1,2 | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\polar bear.mp3 |
| 13 | sheep | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sheep.mp3 |
| 14 | trousers | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\trousers.mp3 |
| 15 | ugly | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ugly.mp3 |
| 16 | young | 1 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\young.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | armchair | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Armchair.mp3 |
| 2 | children | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Children.mp3 |
| 3 | clock | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\clock.mp3 |
| 4 | cupboard | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\cupboard.mp3 |
| 5 | favourite | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\favourite.mp3 |
| 6 | fruit | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\fruit.mp3 |
| 7 | lamp | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lamp.mp3 |
| 8 | mirror | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\mirror.mp3 |
| 9 | picture | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\picture.mp3 |
| 10 | polar bear | 1,2 | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\polar bear.mp3 |
| 11 | sausage | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\sausage.mp3 |
| 12 | smile | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\smile.mp3 |
| 13 | watch | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\watch.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | armchair | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Armchair.mp3 |
| 2 | boat | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\boat.mp3 |
| 3 | children | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Children.mp3 |
| 4 | clock | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\clock.mp3 |
| 5 | cupboard | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\cupboard.mp3 |
| 6 | favourite | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\favourite.mp3 |
| 7 | fruit | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\fruit.mp3 |
| 8 | lamp | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lamp.mp3 |
| 9 | mirror | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\mirror.mp3 |
| 10 | picture | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\picture.mp3 |
| 11 | sausage | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\sausage.mp3 |
| 12 | smile | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\smile.mp3 |
| 13 | watch | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\watch.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | armchair | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Armchair.mp3 |
| 2 | boat | 3,4 | listenchoose | 2 | ✅ Có file | frontend\public\assets\audios\boat.mp3 |
| 3 | children | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Children.mp3 |
| 4 | clock | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\clock.mp3 |
| 5 | cupboard | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\cupboard.mp3 |
| 6 | favourite | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\favourite.mp3 |
| 7 | fruit | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\fruit.mp3 |
| 8 | lamp | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\lamp.mp3 |
| 9 | mirror | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\mirror.mp3 |
| 10 | picture | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\picture.mp3 |
| 11 | sausage | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\sausage.mp3 |
| 12 | smile | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\smile.mp3 |
| 13 | watch | 2,3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\watch.mp3 |

### UNIT 13 (`unit-13`)

- Unit order: 25
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bear | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bear.mp3 |
| 2 | camera | máy ảnh | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\camera.mp3 |
| 3 | crocodile | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\crocodile.mp3 |
| 4 | elephant | 1,2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\elephant.mp3 |
| 5 | giraffe | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\giraffe.mp3 |
| 6 | hippo | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\hippo.mp3 |
| 7 | lizard | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lizard.mp3 |
| 8 | monkey | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\monkey.mp3 |
| 9 | polar bear | 1,2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\polar bear.mp3 |
| 10 | snake | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\snake.mp3 |
| 11 | tiger | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\tiger.mp3 |
| 12 | zebra | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\zebra.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | bear | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\bear.mp3 |
| 2 | camera | máy ảnh | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\camera.mp3 |
| 3 | crocodile | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\crocodile.mp3 |
| 4 | elephant | 1,2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\elephant.mp3 |
| 5 | giraffe | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\giraffe.mp3 |
| 6 | hippo | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\hippo.mp3 |
| 7 | lizard | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lizard.mp3 |
| 8 | monkey | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\monkey.mp3 |
| 9 | polar bear | 1,2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\polar bear.mp3 |
| 10 | snake | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\snake.mp3 |
| 11 | tiger | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\tiger.mp3 |
| 12 | zebra | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\zebra.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Badminton | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Badminton.mp3 |
| 2 | bear | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bear.mp3 |
| 3 | bread | 3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\bread.mp3 |
| 4 | hockey | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Hockey.mp3 |
| 5 | Keyboard | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\keyboard.mp3 |
| 6 | leg | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\leg.mp3 |
| 7 | Pineapple | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\pineapple.mp3 |
| 8 | poster | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\poster.mp3 |
| 9 | socks | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\socks.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Badminton | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Badminton.mp3 |
| 2 | bear | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\bear.mp3 |
| 3 | bread | 3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\bread.mp3 |
| 4 | hockey | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Hockey.mp3 |
| 5 | Keyboard | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\keyboard.mp3 |
| 6 | leg | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\leg.mp3 |
| 7 | Pineapple | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\pineapple.mp3 |
| 8 | poster | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\poster.mp3 |
| 9 | socks | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\socks.mp3 |

### UNIT 14 (`unit-14`)

- Unit order: 26
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | balloon | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\balloon.mp3 |
| 2 | bat | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Bat.mp3 |
| 3 | camera | 1,2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\camera.mp3 |
| 4 | chocolate | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Chocolate.mp3 |
| 5 | juice | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\juice.mp3 |
| 6 | lemonade | 1,2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Lemonade.mp3 |
| 7 | lizard | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lizard.mp3 |
| 8 | milk | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\milk.mp3 |
| 9 | orange | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\orange.mp3 |
| 10 | racket | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\racket.mp3 |
| 11 | sea | biển | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sea.mp3 |
| 12 | skateboard | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Skateboard.mp3 |
| 13 | tablet | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Tablet.mp3 |
| 14 | tennis | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Tennis.mp3 |
| 15 | watch | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\watch.mp3 |
| 16 | water | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\water.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | balloon | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\balloon.mp3 |
| 2 | bat | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Bat.mp3 |
| 3 | camera | 1,2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\camera.mp3 |
| 4 | chocolate | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Chocolate.mp3 |
| 5 | juice | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\juice.mp3 |
| 6 | lemonade | 1,2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Lemonade.mp3 |
| 7 | lizard | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\lizard.mp3 |
| 8 | milk | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\milk.mp3 |
| 9 | orange | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\orange.mp3 |
| 10 | racket | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\racket.mp3 |
| 11 | sea | biển | lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sea.mp3 |
| 12 | skateboard | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Skateboard.mp3 |
| 13 | tablet | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Tablet.mp3 |
| 14 | tennis | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Tennis.mp3 |
| 15 | watch | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\watch.mp3 |
| 16 | water | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\water.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | arm | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\arm.mp3 |
| 2 | armchair | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Armchair.mp3 |
| 3 | crayon | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\crayon.mp3 |
| 4 | hippo | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hippo.mp3 |
| 5 | ice-cream | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ice-cream.mp3 |
| 6 | meatball | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Meatball.mp3 |
| 7 | onion | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\onion.mp3 |
| 8 | orange | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\orange.mp3 |
| 9 | piano | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Piano.mp3 |
| 10 | ruler | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ruler.mp3 |
| 11 | tennis | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Tennis.mp3 |
| 12 | tennis racket | 3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Tennis racket.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | arm | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\arm.mp3 |
| 2 | armchair | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Armchair.mp3 |
| 3 | crayon | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\crayon.mp3 |
| 4 | hippo | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\hippo.mp3 |
| 5 | ice-cream | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ice-cream.mp3 |
| 6 | meatball | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Meatball.mp3 |
| 7 | onion | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\onion.mp3 |
| 8 | orange | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\orange.mp3 |
| 9 | piano | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Piano.mp3 |
| 10 | ruler | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\ruler.mp3 |
| 11 | tennis | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Tennis.mp3 |
| 12 | tennis racket | 3,4 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Tennis racket.mp3 |

### UNIT 15 (`unit-15`)

- Unit order: 27
- Level áp dụng: pre11, pre12, pre2, pre3

#### Level: Pre 1.1 (2 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | beach | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\beach.mp3 |
| 2 | drink | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\drink.mp3 |
| 3 | eat | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\eat.mp3 |
| 4 | Fly | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\fly.mp3 |
| 5 | handbag | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\handbag.mp3 |
| 6 | jelly fish | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\jellyfish.mp3 |
| 7 | kite | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\kite.mp3 |
| 8 | lemonade | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Lemonade.mp3 |
| 9 | listen to | 1,2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Listen to.mp3 |
| 10 | read | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Read.mp3 |
| 11 | ride | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ride.mp3 |
| 12 | sand | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sand.mp3 |
| 13 | sea | 1,2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\sea.mp3 |
| 14 | shell | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\shell.mp3 |
| 15 | Trousers | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\trousers.mp3 |
| 16 | water | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\water.mp3 |
| 17 | wear | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Wear.mp3 |

#### Level: Pre 1.2 (3 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | beach | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\beach.mp3 |
| 2 | drink | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\drink.mp3 |
| 3 | eat | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\eat.mp3 |
| 4 | Fly | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\fly.mp3 |
| 5 | handbag | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\handbag.mp3 |
| 6 | jelly fish | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\jellyfish.mp3 |
| 7 | kite | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\kite.mp3 |
| 8 | lemonade | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Lemonade.mp3 |
| 9 | listen to | 1,2 | listenchoose, lookchoose, pronunciation | 1, 2 | ✅ Có file | frontend\public\assets\audios\Listen to.mp3 |
| 10 | read | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Read.mp3 |
| 11 | ride | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\ride.mp3 |
| 12 | sand | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\sand.mp3 |
| 13 | sea | 1,2 | listenchoose | 1 | ✅ Có file | frontend\public\assets\audios\sea.mp3 |
| 14 | shell | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\shell.mp3 |
| 15 | Trousers | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\trousers.mp3 |
| 16 | water | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\water.mp3 |
| 17 | wear | 1,2 | listenchoose, lookchoose, pronunciation | 1 | ✅ Có file | frontend\public\assets\audios\Wear.mp3 |

#### Level: Pre 2 (4-5 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | board | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\board.mp3 |
| 2 | boots | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\boots.mp3 |
| 3 | lorry | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Lorry.mp3 |
| 4 | mango | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\mango.mp3 |
| 5 | paper | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\paper.mp3 |
| 6 | train | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\train.mp3 |

#### Level: Pre 3 (6 tuổi)

| # | Tiếng Anh | Tiếng Việt | Game | Tuần | Audio | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | board | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\board.mp3 |
| 2 | boots | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\boots.mp3 |
| 3 | lorry | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\Lorry.mp3 |
| 4 | mango | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\mango.mp3 |
| 5 | paper | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\paper.mp3 |
| 6 | train | 3,4 | listenchoose, lookchoose, pronunciation | 2 | ✅ Có file | frontend\public\assets\audios\train.mp3 |

---

## Từ vựng thiếu file audio (local)

_Không phát hiện từ nào thiếu file audio local._

### Chi tiết thiếu audio theo level (đầy đủ)

_Không có._

---

## Ghi chú kiểm tra audio

- ✅ **Có file**: tìm thấy file `.mp3` trong `frontend/public`, `backend/wwwroot`, hoặc `frontend/dist`.
- 🔗 **Remote URL**: audio trỏ Google Drive / URL ngoài — không kiểm tra tải được hay không trong script này.
- ❌ **Thiếu audio**: không có bản ghi MediaAssets phù hợp và không có file local theo quy tắc `/assets/audios/{tên}.mp3`.
