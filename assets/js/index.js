
$("#add-user").submit(function(event){
    alert("Data insert successfully!")
});

$("#update-user").submit(function(event){
    event.preventDefault();

    var data={};

    var unindexed_array = $(this).serializeArray();
    
    $.map(unindexed_array, (n, i)=>{
        data[n['name']] = n['value']
    })

    console.log(data);

    var request={
        "url": `http://127.0.0.1:3000/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    };

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!")
    });

})

if (window.location.pathname == '/'){
    let id='';
    $ondelete = $(".table tbody td a.delete");
    console.log($ondelete)
    $ondelete.click(function(){
        console.log('Ok')
        id = $(this).attr("data-id");
        console.log(id)
        var request={
            "url": `http://127.0.0.1:3000/api/users/${id}`,
            "method": "DELETE"
        };
    
        if (confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!")
            });
            location.reload();
        }
    })
    
}