# angular

## Observable Rxjs
    * Đại diện cho một luồng dữ liệu mà có thể theo dõi và xử lý
    * Observable phát ra giá trị (nhận được từ api,..) 
    * Và để nhận được các giá trị đó thì sử dụng Subscriber để nhận
```
this.http.get('https://api.example.com/data')
  .subscribe(response => {
    // Xử lý dữ liệu trả về
    console.log(response);
  }, error => {
    // Xử lý lỗi (nếu có)
    console.error(error);
  });
```

```
import { map } from 'rxjs/operators';

this.http.get('https://api.example.com/data')
  .pipe(
    map(response => {
      // Biến đổi dữ liệu trả về thành đối tượng JavaScript
      return response as MyData;
    })
  )
  .subscribe(data => {
    // Xử lý dữ liệu đã được biến đổi
    console.log(data);
  }, error => {
    console.error(error);
  });
```


## pipe
* Có thể chuyển một hoặc nhiều toán tử RxJS vào phương thức này dưới dạng các tham số. Các toán tử này sẽ được áp dụng tuần tự lên Observable, tạo thành một chuỗi các xử lý liên tiếp

```
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5);
```


```
numbers$.pipe(
  filter(number => number % 2 === 0), // Lọc các số chẵn
  map(number => number * 2) // Nhân đôi các số
)
.subscribe(result => {
  console.log(result); // Kết quả: 4, 8
});
```
* Trong ví dụ trên, chúng ta sử dụng pipe() để kết hợp hai toán tử filter() và map() vào Observable numbers$. Toán tử filter() được sử dụng để lọc các số chẵn, trong khi toán tử map() được sử dụng để nhân đôi các số. Kết quả cuối cùng được đăng ký với phương thức subscribe() để nhận và xử lý.

* Qua việc sử dụng pipe(), chúng ta có thể xây dựng các chuỗi xử lý phức tạp hơn bằng cách kết hợp nhiều toán tử RxJS. Việc này giúp tách nhỏ và tái sử dụng mã, đồng thời cho phép chúng ta xử lý dữ liệu một cách linh hoạt và đáng tin cậy trong Angular.