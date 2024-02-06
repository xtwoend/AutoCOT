var startDate = new Date("2024-01-20T00:00:00Z");
var endDate = new Date("2024-01-26T00:00:00Z");
const endPoint = `http://192.168.170.89:5000/api/`;
// const  chart = new CanvasJS.Chart("chartContainer", chartOptions);

const groupSelect = document.getElementById("group");
groupSelect.addEventListener("change", (e) => {
  let groupName = groupSelect.options[groupSelect.selectedIndex].text;
  // console.log(groupName)
  form.Id = e.target.value;
  form.Name = groupName;
  // console.log(form)
});
const selectOptions = [{ value: "0", text: "Select a Archive Group" }];
//const selectedItem = document.getElementById("selected-item");

let startGetArchives = false;
let restartGetArchives = false;
let trendMode = "live";
const liveChart = document.getElementById("liveChart");
liveChart.addEventListener("click", (e) => {
  trendMode = e.target.value;
  hideDate();
  //console.log(trendMode)
});
const historyChart = document.getElementById("historyChart");
historyChart.addEventListener("click", (e) => {
  trendMode = e.target.value;
  showDate();
  //console.log(trendMode)
});
hideDate();

const start = document.getElementById("startDate");
start.addEventListener("change", (e) => {
  startDate = new Date(e.target.value);
  //console.log(form);
});

const end = document.getElementById("endDate");
end.addEventListener("change", (e) => {
  endDate = new Date(e.target.value);
  //form.EndDate = e.target.value;
  //console.log(form);
});

function hideDate() {
  const hiddenFilters = document.getElementsByClassName("hidden-filter");
  //console.log('hiddenFilters', hiddenFilters)
  for (const elems of hiddenFilters) {
    //console.log('elems', elems)
    elems.style.display = "none";
  }
}

function showDate() {
  const hiddenFilters = document.getElementsByClassName("hidden-filter");
  for (const elems of hiddenFilters) {
    //console.log("elems", elems);
    elems.style.display = "block";
  }
}

function enabledControl() {
  liveChart.disabled = false;
  historyChart.disabled = false;
  groupSelect.disabled = false;
  start.disabled = false;
  end.disabled = false;
}
function disabledControl() {
  liveChart.disabled = true;
  historyChart.disabled = true;
  groupSelect.disabled = true;
  start.disabled = true;
  end.disabled = true;
}

const startTrend = document.getElementById("startTrend");
// startTrend.addEventListener("click", (e) => {
//   if (!startGetArchives) {
//     startGetArchives = true;
//     disabledControl();
//     firstUpdateChart(chart);
//   }
//   //console.log(trendMode)
// });

const stopTrend = document.getElementById("stopTrend");
stopTrend.addEventListener("click", (e) => {
  startGetArchives = false;
  enabledControl();
  //console.log(trendMode)
});
const restartTrend = document.getElementById("restartTrend");
restartTrend.addEventListener("click", (e) => {
  if (startGetArchives) {
    restartGetArchives = true;
  }
  //console.log(trendMode)
});

const form = {
  Id: 0,
  StartDate: null,
  EndDate: null,
  Name: "",
};
const responseInfo = {
  pageNumber: 1,
  pageSize: 10000,
  totalPages: 0,
};

function fetchOptions() {
  //const selectOptions = document.getElementById("group");
  //   console.log("groupSelect", groupSelect);
  //   console.log("selectOptions", selectOptions);
  getGroups().then((data) => {
    // console.log("getgroup data", data);
    for (let item of data.data) {
      // console.log("item", item);
      let tobj = { value: item.id, text: item.chartGroupName };
      selectOptions.push({ value: item.id, text: item.chartGroupName });
    }
    // console.log("selectOptions after", selectOptions);
    for (let key in selectOptions) {
      //   console.log("key", key);
      let option = document.createElement("option");
      option.setAttribute("value", selectOptions[key].value);
      //   console.log("option", option);
      let optionText = document.createTextNode(selectOptions[key].text);
      option.appendChild(optionText);
      //   console.log("optionText", optionText);
      groupSelect.appendChild(option);
    }
  });
}

var chartOptions = {
  title: {
    text: "",
    fontSize: 30,
  },
  zoomEnabled: true,
  animationEnabled: true,
  legend: {
    fontSize: 15,
    cursor: "pointer",
    itemclick: function (e) {
      //console.log("legend click: " + e.dataPointIndex);
      //console.log(e);
      if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      } else {
        e.dataSeries.visible = true;
      }

      e.chart.render();
    },
  },
  data: [
    {
      type: "line",
      dataPoints: [],
    },
  ],
};

async function getArchives(form, pageNumber, pageSize) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      data: JSON.stringify(form),
      contentType: "application/json",
      url: `${endPoint}Archive/GetArchives?PageNumber=${pageNumber}&PageSize=${pageSize}`,
      success: function (data, status) {
        resolve(data);
      },
    });
  });
}

function getData({ data }) {
  const [a] = data;
  return a;
}

function firstUpdateChart(chart) {
  //   console.log("firstUpdateChart start");

  responseInfo.pageNumber = 1;
  chartOptions.data = [];
  getArchives(form, responseInfo.pageNumber, responseInfo.pageSize).then(
    (data) => {
      if (!data.success) {
        alert(data.message);
        enabledControl();
        startGetArchives = false;
        restartGetArchives = false;
      } else {
        if (data.totalPages > 0) {
          responseInfo.pageNumber = data.pageNumber + 1;
          responseInfo.pageSize = data.pageSize;
          responseInfo.totalPages = data.totalPages;
        }

        const apiData = getData(data);
        if (apiData.data.length > 0) {
          const newdata = [];
          apiData.data.forEach((ele) => {
            //console.log("ele", ele);
            let [found] = chartOptions.data.filter((x) => x.name === ele.name);
            //console.log("found ori", found);
            if (found === undefined || found.length <= 0) {
              found = { ...ele };
              //console.log("not found", found);
            } else {
              found.dataPoints = [...found.dataPoints, ...ele.dataPoints];
              //console.log("found", found);
            }
            newdata.push(found);
          });
          chartOptions.data = [...newdata];
          chartOptions.title.text = apiData.title;
          chartOptions.axisY = apiData.axisY;
          chartOptions.axisX = apiData.axisX;

          //console.log("chartOptions", chartOptions);
          //console.log("chart", chart);
          chart.render();
        } else {
          alert("No data found");
          startGetArchives = false;
          enabledControl();
        }

        if (restartGetArchives) {
          restartGetArchives = false;
        }
        if (startGetArchives) {
          calculateNextForm(chartOptions);
          nextUpdateChart(chart);
        }
      }
    }
  );
}

function nextUpdateChart(chart) {
  //   console.log("nextUpdateChart start");

  getArchives(form, responseInfo.pageNumber, responseInfo.pageSize).then(
    (data) => {
      if (!data.success) {
        alert(data.message);
        enabledControl();
        startGetArchives = false;
        restartGetArchives = false;
      } else {
        if (data.totalPages > 0) {
          responseInfo.pageNumber = data.pageNumber + 1;
          responseInfo.pageSize = data.pageSize;
          responseInfo.totalPages = data.totalPages;
        }

        const apiData = getData(data);
        const newdata = [];
        //console.log("apiData", apiData);
        if (apiData.data.length > 0) {
          apiData.data.forEach((ele) => {
            //console.log("ele", ele);
            let [found] = chartOptions.data.filter((x) => x.name === ele.name);
            //console.log("found ori", found);
            if (found === undefined || found.length <= 0) {
              found = { ...ele };
              //console.log("not found", found);
            } else {
              found.dataPoints = [...found.dataPoints, ...ele.dataPoints];
              //console.log("found", found);
            }
            newdata.push(found);
          });
          chartOptions.data = [...newdata];

          chart.render();
        }
        // else {
        //   alert("No data found");
        //   startGetArchives = false;
        //   enabledControl();
        // }
        //console.log("chartOptions after", chartOptions);
        //console.log("chartOptions", chartOptions);
        //console.log("chart", chart);
        if (startGetArchives && !restartGetArchives) {
          if (
            responseInfo.pageNumber < responseInfo.totalPages ||
            trendMode === "live"
          ) {
            let nTime = 100;
            if (trendMode === "live") {
              nTime = 10000;
            }
            setTimeout(function () {
              calculateNextForm(chartOptions);
              nextUpdateChart(chart);
            }, nTime);
          }
          if (
            responseInfo.pageNumber >= responseInfo.totalPages &&
            trendMode === "history"
          ) {
            startGetArchives = false;
            enabledControl();
          }
        }
        if (restartGetArchives) {
          initForm();
          firstUpdateChart(chart);
        }
      }
    }
  );
}

async function getGroups() {
  // console.log('button ajax diklik');
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "GET",
      url: `${endPoint}Archive/GetChartGroup`,
      success: function (data, status) {
        resolve(data);
      },
    });
  });
}

function calculateNextForm({ data }) {
  //console.log("calculateNextForm; Form before", form);
  //console.log("calculateNextForm; data", data);
  if (trendMode === "live") {
    // let mdatapoints = [];
    let kdatapoints = data.reduce((tot, row) => {
      if (row["dataPoints"] != null) {
        //console.log("calculateNextForm; row", row["dataPoints"]);
        return [...tot, ...row["dataPoints"]];
      }
    }, []);
    // console.log("calculateNextForm; mdatapoints", mdatapoints);
    //console.log("calculateNextForm; kdatapoints", kdatapoints);
    const max = kdatapoints.reduce(
      function (prev, current) {
        return prev && prev.x > current.x ? prev : current;
      },
      { x: 0, y: 0 }
    ); //returns object
    //console.log("calculateNextForm; max", max);
    const lastDate = new Date(max.x);
    //console.log("calculateNextForm; lastDate", lastDate);
    form.StartDate = lastDate;
    form.EndDate = null;
    responseInfo.pageNumber = 1;
  } else {
    form.StartDate = startDate;
    form.EndDate = endDate;
  }
  //console.log("calculateNextForm; Form after", form);
  //console.log("calculateNextForm; responseInfo", responseInfo);
}

function initForm() {
  if (trendMode === "live") {
    form.StartDate = null;
    form.EndDate = null;
  } else {
    form.StartDate = startDate;
    form.EndDate = endDate;
  }
}

fetchOptions();

window.addEventListener("load", () => {
  //fetchOptions();
  const chart = new CanvasJS.Chart("chartContainer", chartOptions);

  startTrend.addEventListener("click", (e) => {
    if (!startGetArchives) {
      initForm();
      startGetArchives = true;
      disabledControl();
      firstUpdateChart(chart);
    }
    //console.log(trendMode)
  });
  //   firstUpdateChart(chart);
});

// window.onload = function () {
//   getGroups();
// };
