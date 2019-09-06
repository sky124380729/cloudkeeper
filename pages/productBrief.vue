<template>
    <div class="productBrief">
        <h3>{{ $t('productBrief.title') }}</h3>
        <table>
            <thead>
                <tr>
                    <th class="content">{{ $t('productBrief.th1') }}</th>
                    <th class="content">{{ $t('productBrief.th2') }}</th>
                    <th class="content">{{ $t('productBrief.th3') }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ $t('productBrief.service1') }}</td>
                    <td class="yes"></td>
                    <td class="no"></td>
                </tr>
                <tr>
                    <td>{{ $t('productBrief.service2') }}</td>
                    <td class="yes"></td>
                    <td class="no"></td>
                </tr>
                <tr>
                    <td>{{ $t('productBrief.service3') }}</td>
                    <td class="yes"></td>
                    <td class="yes"></td>
                </tr>
                <tr>
                    <td>{{ $t('productBrief.service4') }}</td>
                    <td class="yes"></td>
                    <td class="no"></td>
                </tr>
                <tr>
                    <td>{{ $t('productBrief.service5') }}</td>
                    <td class="yes"></td>
                    <td class="yes"></td>
                </tr>
                <tr>
                    <td>{{ $t('productBrief.service6') }}</td>
                    <td class="yes"></td>
                    <td class="yes"></td>
                </tr>
                <tr>
                    <td>{{ $t('productBrief.service7') }}</td>
                    <td class="yes"></td>
                    <td class="yes"></td>
                </tr>
                <tr>
                    <td>{{ $t('productBrief.service8') }}</td>
                    <td class="yes"></td>
                    <td class="yes"></td>
                </tr>
            </tbody>
        </table>
        <img class="deployment" src="~imgs/deployment.png" alt="" />
    </div>
</template>

<script>
export default {
    name: 'ProductBrief',
    layout: 'content',
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.productBrief {
    h3 {
        font-size: 18px;
        font-weight: bold;
        color: rgba(48, 49, 51, 1);
        line-height: 18px;
    }
    table {
        width: 100%;
        margin: 30px 0;
        border-spacing: 0;
        border: 1px solid #dadee6;
        thead {
            background-color: #f2f8fc;
            th {
                height: 80px;
                font-size: 18px;
                font-weight: bold;
                color: #303133;
                &.content {
                    width: 400px;
                    font-size: 16px;
                    color: #616366;
                    font-weight: normal;
                }
            }
        }
        tbody {
            td {
                text-align: center;
                height: 60px;
                color: #616366;
                font-size: 18px;
                border-top: 1px solid #dadee6;
                &.yes {
                    background: url('~imgs/hook_blue.png') no-repeat center;
                }
                &.no {
                    background: url('~imgs/hook_grey.png') no-repeat center;
                }
            }
        }
    }

    .deployment {
        display: block;
        margin: 40px auto 60px;
    }
}

@media screen and (max-width: 1200px) {
    .productBrief {
        h3 {
            font-size: 36px;
            line-height: 36px;
        }
        .deployment {
            width: 100%;
        }
        table {
            margin: 40px 0;
            thead {
                th {
                    font-size: 28px;
                    &.content {
                        width: 600px;
                        font-size: 26px;
                    }
                }
            }
            tbody {
                td {
                    font-size: 26px;
                }
                td.yes,
                td.no {
                    background-size: 26px !important;
                }
            }
        }
    }
}
</style>
