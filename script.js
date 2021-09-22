<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Linking favicon -->
    <link rel="shortcut icon" href="formfevicon.png" type="image/x-icon">
    <!-- Linking bootstrap css files -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <!-- Linking external css files  -->
    <link rel="stylesheet" href="style.css">
    <title>HTML Forms</title>
</head>
<body>

    
  <div class="container  justify-content-center" id="main">
    <h2 class="text-center">Personal details</h2>
    
    <form id="myform" action="" onsubmit="return false">
        <!-- Name -->
        <div class="form-group row  name">
            <div class="col col-sm-5">
                <label for="fname">First Name</label>
                <input type="text" class="form-control col-6 " id="fname" placeholder="First Name">
            </div>
            <div class="col col-sm-5">
                <label for="lname">Last Name</label>
                <input type="text" class="form-control col-6 " id="lname" placeholder="Last Name">
            </div>
        </div>

        <!-- Address -->
        <div class="form-group">
            <label for="address">Address</label>
            <textarea id="address" class="form-control col-7" placeholder="Enter your address here"></textarea>
        </div>
        <div class="form-group">
            <label for="pincode">Pincode</label>
            <input type="text" id="pin" class="form-control col-3" maxlength="6" placeholder="Pincode">
        </div>

        <!-- Gender -->
        <label for="gender" class="mr-5 mb-4">Gender</label>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="gender" id="male" value="male" checked>
            <label class="form-check-label" for="male">
              Male
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="gender" id="female" value="female">
            <label class="form-check-label" for="female">
              Female
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="gender" id="others" value="others" >
            <label class="form-check-label" for="others">
              Others
            </label>
          </div>

        <!-- Food -->
        <br>
        <label for="food" class="mr-5 mb-4">Please select food</label>
        <div class="form-check form-check-inline ">
            <input class="form-check-input" type="checkbox" name="food" id="Indian Cuisine" value="Indian Cuisine" >
            <label class="form-check-label" for="Indian Cuisine">
                Indian Cuisine
            </label>
          </div>
          <div class="form-check form-check-inline ">
            <input class="form-check-input" type="checkbox" name="food" id="Italian Cuisine" value="Italian Cuisine">
            <label class="form-check-label" for="Italian Cuisine">
                Italian Cuisine
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="food" id="Chinese Cuisine" value="Chinese Cuisine" >
            <label class="form-check-label" for="Chinese Cuisine">
                Chinese Cuisine
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="food" id="French Cuisine" value="French Cuisine" >
            <label class="form-check-label" for="French Cuisine">
                French Cuisine
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="food" id=" Thai Cuisine" value="Thai Cuisine" >
            <label class="form-check-label" for="Thai Cuisine">
                Thai Cuisine
            </label>
          </div>

        <!-- state -->
        <div class="form-group state ">
            <label for="state">State</label>
            <input type="text" class="form-control col-3" id="state" placeholder="State">
        </div>

        <!-- country -->
        <div class="form-group country">
            <label for="country">Country</label>
            <input type="text" class="form-control col-3" id="country" placeholder="Country">
        </div>
        <div id="form_end">
          <button type="submit" class="btn btn-primary submit">Submit</button>
        </div>
    </form>
    
  </div>

  <!-- Table  -->
  <div class="container-fluid" id="table_div">
    <table class="table" id="myTable" >
      <thead class="thead-light">
        <tr>
          <th scope="col">S No</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Address</th>
          <th scope="col">Pincode</th>
          <th scope="col">Gender</th>
          <th scope="col">Food</th>
          <th scope="col">State</th>
          <th scope="col">Country</th>
        </tr>
      </thead>
      <tbody class="tbody" id="tbody">
      </tbody>
    </table>
  </div>
  

    <!-- Linking js files -->
    <script src="script.js"></script>
    <!-- Linking Bootstrap JS Files -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>
